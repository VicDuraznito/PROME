import express from 'express';
import multer from 'multer';
import pg from 'pg'; // Importa todo el módulo
const { Client } = pg; // Extrae Client de pg

const router = express.Router();

// Configuración de multer para la carga de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Asegúrate de que la carpeta 'uploads' exista
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);  // Usa el nombre original del archivo
    }
});
const upload = multer({ storage: storage });

// Configuración de la base de datos PostgreSQL
const client = new Client({
    connectionString: process.env.DATABASE_URL, // Usar la URL de conexión de la base de datos
    ssl: {
        rejectUnauthorized: false,
    },
});

// Conectar a PostgreSQL
client.connect();

// Endpoint para crear una noticia
router.post('/noticias', upload.single('imagen'), (req, res) => {
    const { titulo, descripcion } = req.body;
    const imagen = req.file ? req.file.filename : null;

    if (!titulo || !descripcion || !imagen) {
        return res.status(400).json({ error: 'Faltan datos o imagen' });
    }

    const query = 'INSERT INTO noticias (titulo, descripcion, imagen) VALUES ($1, $2, $3) RETURNING id';
    client.query(query, [titulo, descripcion, imagen], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const { id } = result.rows[0];
        res.status(201).json({ id, titulo, descripcion, imagen });
    });
});

// Obtener las noticias
router.get('/noticias', (req, res) => {
    console.log('Solicitud recibida en GET /noticias');
    const query = 'SELECT * FROM noticias ORDER BY fecha DESC';

    client.query(query, [], (err, result) => {
        if (err) {
            console.error('Error en la consulta:', err.message);
            return res.status(500).json({ error: 'Error en la base de datos' });
        }

        console.log('Resultados obtenidos:', result.rows);
        res.status(200).json(result.rows);
    });
});

// Actualizar una noticia
router.put('/noticias/:id', upload.single('imagen'), (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;
    const imagen = req.file ? req.file.filename : null;

    let query = 'UPDATE noticias SET titulo = $1, descripcion = $2';
    const values = [titulo, descripcion];

    if (imagen) {
        query += ', imagen = $3';
        values.push(imagen);
    }

    query += ' WHERE id = $' + (imagen ? 4 : 3);

    client.query(query, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Noticia no encontrada' });
        }

        res.status(200).json({ id, titulo, descripcion, imagen });
    });
});

export default router;

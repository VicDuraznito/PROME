import express from 'express';
import multer from 'multer';
import db from '../db/db.js';  // Asegúrate de que tu base de datos esté configurada correctamente

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

// Endpoint para crear una noticia
router.post('/noticias', upload.single('imagen'), (req, res) => {
    const { titulo, descripcion } = req.body;
    const imagen = req.file ? req.file.filename : null;

    if (!titulo || !descripcion || !imagen) {
        return res.status(400).json({ error: 'Faltan datos o imagen' });
    }

    const query = 'INSERT INTO noticias (titulo, descripcion, imagen) VALUES (?, ?, ?)';
    db.run(query, [titulo, descripcion, imagen], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, titulo, descripcion, imagen });
    });
});

// Obtener las noticias
router.get('/noticias', (req, res) => {
    console.log('Solicitud recibida en GET /noticias');
    const query = 'SELECT * FROM noticias ORDER BY fecha DESC';

    db.all(query, [], (err, filas) => {
        if (err) {
            console.error('Error en la consulta:', err.message);
            return res.status(500).json({ error: 'Error en la base de datos' });
        }

        console.log('Resultados obtenidos:', filas);
        res.status(200).json(filas);
    });
});

export default router;

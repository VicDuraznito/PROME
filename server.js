import express from 'express';
import cors from 'cors';
import { handleContact } from './src/api/contacto.js'; // Importa el controlador de contacto
import loginRoutes from './src/api/login.js';
import noticiasRoutes from './src/api/noticias.js';
import bodyParser from 'body-parser';
import sqlite3 from 'sqlite3';  // Agregar sqlite3
import * as XLSX from 'xlsx';  // Agregar XLSX
import fs from 'fs';  // Agregar fs
import path from 'path';  // Agregar path
import { fileURLToPath } from 'url';

// Define manualmente __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors()); // Permitir solicitudes CORS
app.use(express.json()); // Usar express.json() para manejar JSON
app.use('/uploads', express.static('uploads')); // Servir archivos subidos estáticamente

// Middleware para parsear datos de formulario (multipart para imágenes)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware de logging
app.use((req, res, next) => {
    console.log(`Método: ${req.method}, Ruta solicitada: ${req.path}`);
    next();
});

// Rutas
app.post('/api/contacto', handleContact); // Endpoint para manejo de contacto
app.use('/api', loginRoutes); // Rutas de login
app.use('/api', noticiasRoutes); // Rutas de noticias

// Ruta para exportar contactos a un archivo Excel
app.get('/api/exportar-contactos', (req, res) => {
    // Ruta absoluta de la base de datos
    const dbPath = path.join(__dirname, 'database.sqlite');
    const db = new sqlite3.Database(dbPath, (err) => {
        if (err) {
            console.error('Error al conectar con SQLite:', err.message);
            res.status(500).send('Error al conectar a la base de datos');
            return;
        }
    });

    db.all('SELECT * FROM contactos', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        // Convertir los datos a un archivo Excel
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(rows);
        XLSX.utils.book_append_sheet(wb, ws, 'Contactos');

        // Asegurarse de que exista el directorio temporal
        const tempDir = path.join(__dirname, 'uploads');
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir);
        }

        const filePath = path.join(tempDir, 'contactos.xlsx');
        XLSX.writeFile(wb, filePath);

        // Enviar el archivo como descarga
        res.download(filePath, 'contactos.xlsx', (err) => {
            if (err) {
                console.error('Error al descargar el archivo:', err);
            }

            // Eliminar el archivo temporal después de la descarga
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error al eliminar el archivo temporal:', err);
                }
            });
        });
    });
});

// Ruta principal para comprobar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor backend. Las rutas disponibles son /api/contacto, /api/login, /api/noticias y /api/exportar-contactos.');
});

// Manejo de errores generales
app.use((err, req, res, next) => {
    console.error('Error detectado:', err.stack || err.message);
    res.status(500).send('Ocurrió un error inesperado!');
});

// Arrancar el servidor
const port = process.env.PORT || 8080; 
app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});


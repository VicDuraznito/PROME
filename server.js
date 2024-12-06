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
app.use(cors());  // Permitir solicitudes CORS
app.use(express.json());  // Usar express.json() para manejar JSON
app.use('/uploads', express.static('uploads')); // Servir archivos subidos estáticamente

// Middleware para parsear datos de formulario (multipart para imágenes)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware de logging, debe ir antes de las rutas
app.use('/api', (req, res, next) => {
    console.log(`Ruta solicitada: ${req.path}`);
    next();
});

// Rutas
app.post('/api/contacto', handleContact);  // Endpoint para manejo de contacto
app.use('/api', loginRoutes);  // Rutas de login
app.use('/api', noticiasRoutes);  // Rutas de noticias

// Ruta para exportar contactos a un archivo Excel
app.get('/api/exportar-contactos', (req, res) => {
    // Conectar a la base de datos SQLite
    const db = new sqlite3.Database('./database.sqlite', (err) => {
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
        const ws = XLSX.utils.json_to_sheet(rows); // Convertir los datos de contactos a formato de hoja
        XLSX.utils.book_append_sheet(wb, ws, 'Contactos');

        // Guardar el archivo Excel en el sistema de archivos temporal
        const filePath = path.join(__dirname, 'contactos.xlsx');
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
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

// Arrancar el servidor
app.listen(5000, () => {
    console.log('Servidor ejecutándose en http://localhost:5000');
});

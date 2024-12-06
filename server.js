import express from 'express';
import cors from 'cors';
import { handleContact } from './src/api/contacto.js'; // Importa el controlador de contacto
import loginRoutes from './src/api/login.js';
import noticiasRoutes from './src/api/noticias.js';
import bodyParser from 'body-parser';

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

// Ruta principal para comprobar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor backend. Las rutas disponibles son /api/contacto, /api/login y /api/noticias.');
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

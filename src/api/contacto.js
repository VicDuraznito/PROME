import sqlite3 from 'sqlite3'; // Importar sqlite3 como un módulo por defecto
import path from 'path';
import { fileURLToPath } from 'url';

// Define manualmente __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta a tu base de datos
const dbPath = path.resolve(__dirname, '../../database.sqlite');
console.log("Ruta a la base de datos:", dbPath);

// Crear una nueva instancia de la base de datos SQLite
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
    }
});

export const handleContact = (req, res) => {
    if (req.method === 'POST') {
        const { nombre, email, telefono, mensaje } = req.body;

        // Verificar que los campos sean obligatorios
        if (!nombre || !email || !telefono) {
            return res.status(400).json({ error: 'Los campos nombre, email y telefono son obligatorios' });
        }

        // Crear el objeto de contacto a insertar
        const newContact = {
            nombre,
            email,
            telefono,
            mensaje,
            fecha: new Date().toISOString()
        };

        // Inserta los datos en la tabla contactos
        const query = `
            INSERT INTO contactos (nombre, email, telefono, mensaje, fecha)
            VALUES (?, ?, ?, ?, ?)
        `;
        
        // Ejecutar la consulta
        db.run(query, [newContact.nombre, newContact.email, newContact.telefono, newContact.mensaje, newContact.fecha], function(err) {
            if (err) {
                console.error('Error al insertar el contacto:', err.message);
                return res.status(500).json({ error: 'Hubo un problema al guardar el contacto' });
            }
            res.status(201).json({ message: 'Contacto guardado exitosamente en la base de datos' });
        });
    } else {
        // Método no permitido
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} no permitido`);
    }
};

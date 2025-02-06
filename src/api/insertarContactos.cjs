const sqlite3 = require('sqlite3').verbose(); // Requiere el módulo sqlite3
const fs = require('fs'); // Requiere el módulo fs para leer el archivo

// Lee el archivo JSON
const contactos = JSON.parse(fs.readFileSync('../db/contacts.json', 'utf8'));

// Conectar a la base de datos SQLite
const db = new sqlite3.Database('../db/database.sqlite');

// Iniciar la inserción de datos
db.serialize(() => {
    // Prepara la consulta para insertar los datos
    const stmt = db.prepare("INSERT INTO contactos (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)");

    // Inserta cada contacto en la base de datos
    contactos.forEach(contacto => {
        stmt.run(contacto.nombre, contacto.email, contacto.telefono, contacto.mensaje);
    });

    stmt.finalize(); // Finaliza la preparación de la consulta
});

// Cierra la base de datos
db.close(() => {
    console.log('Datos insertados correctamente');
});

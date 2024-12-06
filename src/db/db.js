import sqlite3 from 'sqlite3';

// Conectar o crear la base de datos
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Error al conectar con SQLite:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
    }
});

// Crear tablas (si no existen)
db.serialize(() => {
    // Tabla para la información de contacto
    db.run(`
        CREATE TABLE IF NOT EXISTS contactos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            email TEXT NOT NULL,
            telefono TEXT NOT NULL,
            mensaje TEXT NOT NULL,
            fecha DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);

    // Tabla para la cuenta admin
    db.run(`
        CREATE TABLE IF NOT EXISTS admin (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        );
    `);

    // Tabla para las noticias
    db.run(`
        CREATE TABLE IF NOT EXISTS noticias (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            descripcion TEXT NOT NULL,
            imagen TEXT NOT NULL,
            fecha DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `);
});

export default db;
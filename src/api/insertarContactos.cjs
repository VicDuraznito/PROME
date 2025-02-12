const { Client } = require('pg'); // Requiere el cliente de PostgreSQL
const fs = require('fs'); // Requiere el módulo fs para leer el archivo


import pg from 'pg'; // Importa todo el módulo
const { Client } = pg; // Extrae Client de pg

// Lee el archivo JSON
const contactos = JSON.parse(fs.readFileSync('../db/contacts.json', 'utf8'));

// Conectar a la base de datos PostgreSQL
const client = new Client({
    connectionString: process.env.DATABASE_URL, // Usar la URL de conexión de la base de datos
    ssl: {
        rejectUnauthorized: false,
    },
});

client.connect() // Conectar a la base de datos
    .then(() => {
        console.log('Conectado a la base de datos PostgreSQL.');
        
        // Iniciar la inserción de datos
        const query = "INSERT INTO contactos (nombre, email, telefono, mensaje) VALUES ($1, $2, $3, $4)";
        
        // Inserta cada contacto en la base de datos
        contactos.forEach(contacto => {
            client.query(query, [contacto.nombre, contacto.email, contacto.telefono, contacto.mensaje])
                .then(() => {
                    console.log(`Contacto insertado: ${contacto.nombre}`);
                })
                .catch(err => {
                    console.error('Error al insertar el contacto:', err.message);
                });
        });
    })
    .catch(err => {
        console.error('Error al conectar con PostgreSQL:', err.message);
    })
    .finally(() => {
        // Cierra la conexión después de insertar todos los contactos
        client.end(() => {
            console.log('Conexión cerrada.');
        });
    });

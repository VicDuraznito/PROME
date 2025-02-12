import { Client } from 'pg'; // Importamos el cliente de PostgreSQL

// Configuración de la base de datos PostgreSQL usando la variable de entorno DATABASE_URL
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

// Conectar a PostgreSQL
client.connect((err) => {
    if (err) {
        console.error('Error al conectar con la base de datos PostgreSQL:', err.message);
    } else {
        console.log('Conectado a la base de datos PostgreSQL.');
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

        // Consulta SQL para insertar el contacto en PostgreSQL
        const query = `
            INSERT INTO contactos (nombre, email, telefono, mensaje, fecha)
            VALUES ($1, $2, $3, $4, $5)
        `;
        
        // Ejecutar la consulta con los valores proporcionados
        client.query(query, [newContact.nombre, newContact.email, newContact.telefono, newContact.mensaje, newContact.fecha], (err, result) => {
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

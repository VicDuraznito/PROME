import { Router } from 'express';
import bcrypt from 'bcrypt';
import { Client } from 'pg'; // Requiere el cliente de PostgreSQL

const router = Router();

// Configuración de la base de datos PostgreSQL
const client = new Client({
    connectionString: process.env.DATABASE_URL, // Usar la URL de conexión de la base de datos
    ssl: {
        rejectUnauthorized: false,
    },
});

// Conectar a PostgreSQL
client.connect();

// Endpoint para autenticar al usuario
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Verifica si el email existe en la base de datos
    const query = 'SELECT * FROM admin WHERE email = $1';
    client.query(query, [email], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error de servidor' });
        }

        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        const row = result.rows[0];

        // Compara la contraseña ingresada con la almacenada
        bcrypt.compare(password, row.password, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error al verificar la contraseña' });
            }

            if (result) {
                // Contraseña correcta, puedes responder con un token o mensaje de éxito
                return res.status(200).json({ message: 'Inicio de sesión exitoso' });
            } else {
                return res.status(401).json({ message: 'Credenciales incorrectas' });
            }
        });
    });
});

export default router;

import { Router } from 'express';
import bcrypt from 'bcrypt';
import db from '../db/db.js'; // Importa la base de datos

const router = Router();

// Endpoint para autenticar al usuario
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Verifica si el email existe en la base de datos
    db.get('SELECT * FROM admin WHERE email = ?', [email], (err, row) => {
        if (err) {
            return res.status(500).json({ message: 'Error de servidor' });
        }

        if (!row) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

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

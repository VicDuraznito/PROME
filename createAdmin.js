import bcrypt from 'bcrypt';
import db from './src/db/db.js'; // Importa la conexión de la base de datos

// Crear un admin predeterminado
const email = 'admin@escuela.com';
const password = 'admin123';

// Hashear la contraseña
bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
        console.error('Error al hashear la contraseña:', err);
    } else {
        // Insertar el admin en la base de datos
        const query = 'INSERT INTO admin (email, password) VALUES (?, ?)';
        db.run(query, [email, hashedPassword], function (err) {
            if (err) {
                console.error('Error al crear el admin:', err.message);
            } else {
                console.log('Admin creado exitosamente.');
            }
        });
    }
});

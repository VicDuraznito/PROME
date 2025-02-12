import { Client } from 'pg'; // Importamos el cliente de PostgreSQL
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import XLSX from 'xlsx';

// Configuración de la base de datos PostgreSQL usando la variable de entorno DATABASE_URL
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

// Define manualmente __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/api/exportar-contactos', (req, res) => {
    // Conectar a PostgreSQL
    client.connect((err) => {
        if (err) {
            console.error('Error al conectar con la base de datos PostgreSQL:', err.message);
            res.status(500).send('Error al conectar a la base de datos');
            return;
        }
    });

    // Realizar la consulta para obtener los contactos
    client.query('SELECT * FROM contactos', (err, result) => {
        if (err) {
            console.error('Error al recuperar los datos:', err.message);
            res.status(500).json({ error: err.message });
            return;
        }

        // Verificar si la consulta devuelve datos
        if (!result.rows || result.rows.length === 0) {
            console.log('No se encontraron datos para exportar');
            return res.status(404).send('No hay contactos en la base de datos');
        }

        // Log de los datos obtenidos
        console.log('Datos obtenidos de la base de datos:', result.rows);

        const wb = XLSX.utils.book_new();
        const filePath = path.join(__dirname, 'contactos.xlsx');

        // Convertir los datos correctamente
        const sheetData = result.rows.map(row => ({
            nombre: row.nombre,
            email: row.email,
            telefono: row.telefono,
            mensaje: row.mensaje, // Agregar mensaje
            fecha: row.fecha,
        }));

        // Log de los datos convertidos
        console.log('Datos para la hoja Excel:', sheetData);

        const ws = XLSX.utils.json_to_sheet(sheetData);

        XLSX.utils.book_append_sheet(wb, ws, 'Contactos');
        console.log('Archivo Excel generado:', filePath);

        // Guardar el archivo Excel
        XLSX.writeFile(wb, filePath);

        // Enviar el archivo como descarga
        res.download(filePath, 'contactos.xlsx', (err) => {
            if (err) {
                console.error('Error al descargar el archivo:', err);
                res.status(500).send('Error al descargar el archivo');
                return;
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

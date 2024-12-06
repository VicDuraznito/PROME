import sqlite3 from 'sqlite3'; 
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import XLSX from 'xlsx';

// Define manualmente __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/api/exportar-contactos', (req, res) => {
    const db = new sqlite3.Database('./database.sqlite', (err) => {
        if (err) {
            console.error('Error al conectar con SQLite:', err.message);
            res.status(500).send('Error al conectar a la base de datos');
            return;
        }
    });

    db.all('SELECT * FROM contactos', [], (err, rows) => {
        if (err) {
            console.error('Error al recuperar los datos:', err.message);
            res.status(500).json({ error: err.message });
            return;
        }

        // Verificar si la consulta devuelve datos
        if (!rows || rows.length === 0) {
            console.log('No se encontraron datos para exportar');
            return res.status(404).send('No hay contactos en la base de datos');
        }

        // Log de los datos obtenidos
        console.log('Datos obtenidos de la base de datos:', rows);

        const wb = XLSX.utils.book_new();
        const filePath = path.join(__dirname, 'contactos.xlsx');

        // Convertir los datos correctamente
        const sheetData = rows.map(row => ({
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

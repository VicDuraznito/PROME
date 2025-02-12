import dotenv from 'dotenv'; // Importar dotenv
import http from 'http'; // Importar http
import { neon } from '@neondatabase/serverless'; // Importar neon

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

// Crear la conexión con la base de datos Neon usando la URL en el archivo .env
const sql = neon(process.env.DATABASE_URL);

// Crear el manejador de la solicitud
const requestHandler = async (req, res) => {
  try {
    // Hacer una consulta simple para obtener la versión de la base de datos
    const result = await sql`SELECT version()`;
    const { version } = result[0];

    // Enviar la respuesta con la versión de la base de datos
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(version);
  } catch (error) {
    // Manejar cualquier error durante la conexión o consulta
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error al conectar a la base de datos: ' + error.message);
  }
};

// Crear el servidor HTTP y escuchando en el puerto 3000
http.createServer(requestHandler).listen(3000, () => {
  console.log('Servidor de base de datos Neon ejecutándose en el puerto 3000');
});

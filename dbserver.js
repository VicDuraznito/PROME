import dotenv from 'dotenv'; // Importar dotenv
import http from 'http'; // Importar http
import { neon } from '@neondatabase/serverless'; // Importar neon

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

// Crear la conexión con la base de datos Neon usando la URL en el archivo .env
const sql = neon(process.env.DATABASE_URL);

// Crear el manejador de la solicitud
const requestHandler = async (req, res) => {
    try {
      // Realizar una consulta para obtener los datos de las tablas
      const contactos = await sql`SELECT * FROM contactos`;
      const admin = await sql`SELECT * FROM admin`;
      const noticias = await sql`SELECT * FROM noticias`;
  
      // Preparar los datos para la respuesta
      const responseData = {
        contactos,
        admin,
        noticias
      };
  
      // Enviar los datos como respuesta en formato JSON
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(responseData));
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


export { sql };
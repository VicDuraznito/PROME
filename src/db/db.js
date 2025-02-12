import pkg from 'pg';
const { Pool } = pkg;

// Conexión a PostgreSQL usando la URL proporcionada
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://neondb_owner:npg_1ZxWsDid2tlF@ep-lingering-mode-a4mkydha-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require', // Utiliza la variable de entorno o la URL por defecto
  ssl: {
    rejectUnauthorized: false, // Esto es necesario para PostgreSQL en Vercel
  },
});

// Crear tablas (si no existen)
const createTables = async () => {
  const client = await pool.connect();
  try {
    // Crear tablas
    await client.query(`
      CREATE TABLE IF NOT EXISTS contactos (
        id SERIAL PRIMARY KEY,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL,
        telefono TEXT NOT NULL,
        mensaje TEXT NOT NULL,
        fecha TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS admin (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS noticias (
        id SERIAL PRIMARY KEY,
        titulo TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        imagen TEXT NOT NULL,
        fecha TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Tablas creadas o ya existentes en PostgreSQL');
  } catch (error) {
    console.error('Error al crear las tablas:', error);
  } finally {
    client.release();
  }
};

// Llamar a la función para crear las tablas
createTables();

// Exportar el pool de conexiones para usarlo en otros archivos
export default pool;


import pool from './db.js';

const testConnection = async () => {
    try {
        const client = await pool.connect();
        console.log('✅ Conexión exitosa a PostgreSQL');
        client.release();
    } catch (error) {
        console.error('❌ Error en la conexión:', error);
    }
};

// Ejecutar solo si se ejecuta directamente
if (import.meta.url === `file://${process.argv[1]}`) {
    testConnection();
}

import React, { useState } from 'react';

const DescargarContactos = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Obtiene la URL base desde la variable de entorno o usa la predeterminada
    const API_URL = process.env.REACT_APP_API_URL || 'https://prome-production.up.railway.app';

    const descargarExcel = () => {
        setLoading(true); // Inicia la carga
        setError(''); // Resetea los errores

        fetch(`${API_URL}/api/exportar-contactos`, {
            method: 'GET',
        })
        .then((response) => {
            if (response.ok) {
                return response.blob();
            } else {
                throw new Error('Hubo un problema al descargar el archivo');
            }
        })
        .then((blob) => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'contactos.xlsx';
            link.click();
            setLoading(false); // Finaliza la carga
        })
        .catch((error) => {
            console.error('Error al descargar el archivo:', error);
            setError('Error al descargar el archivo');
            setLoading(false); // Finaliza la carga
        });
    };

    return (
        <div className="flex justify-center">
            {loading ? (
                <div className="text-blue-500">Cargando...</div>
            ) : (
                <button
                    onClick={descargarExcel}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Descargar Contactos
                </button>
            )}

            {error && <p className="text-red-500">{error}</p>} {/* Mostrar error si existe */}
        </div>
    );
};

export default DescargarContactos;

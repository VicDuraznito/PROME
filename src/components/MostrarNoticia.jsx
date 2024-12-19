import React from 'react';
import PropTypes from 'prop-types';

const MostrarNoticia = ({ noticia }) => {
    const { titulo, descripcion, imagen } = noticia;
    // Obtiene la URL base desde la variable de entorno o usa la predeterminada
    const API_URL = process.env.REACT_APP_API_URL || 'https://prome-production.up.railway.app';
    const imageUrl = `${API_URL}/uploads/${imagen}`; // Ruta completa de la imagen

    return (
        <div className="px-2 w-1/2">
            <div className="bg-gray-100 p-6 flex flex-col items-center">
                <img
                    alt={noticia.titulo}
                    className="w-full object-cover h-64 mb-4 rounded-md"
                    src={imageUrl}
                />
                <h2 className="text-xl font-semibold mb-2 text-black">{noticia.titulo}</h2>
                <p className="text-gray-700 text-center">
                    {noticia.descripcion}
                </p>
            </div>
        </div>
    );
};

MostrarNoticia.propTypes = {
    noticia: PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
    }).isRequired,
};

export default MostrarNoticia;

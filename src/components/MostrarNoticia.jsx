import React from 'react';
import PropTypes from 'prop-types';

const MostrarNoticia = ({ noticia }) => {
    const { titulo, descripcion, imagen } = noticia;
    const imageUrl = `http://localhost:5000/uploads/${imagen}`; // Ruta completa de la imagen

    return (
        <div className="px-2 w-1/2">
            <div className="bg-gray-100 p-6 flex flex-col items-center">
                <img
                    alt={noticia.titulo}
                    className="w-full object-cover h-64 mb-4 rounded-md"
                    src={`http://localhost:5000/uploads/${noticia.imagen}`}
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
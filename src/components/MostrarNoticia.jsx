import React from 'react';
import PropTypes from 'prop-types';

const MostrarNoticia = ({ noticia }) => {
    return (
        <div className="flex flex-wrap w-full bg-gray-100 mb-6">
            <div className="w-1/2 p-6">
                <img
                    alt={noticia.titulo}
                    className="w-full h-full object-cover rounded-md"
                    src={noticia.imagen}
                />
            </div>
            <div className="w-1/2 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-2 text-black">{noticia.fecha}</h2>
                <p className="text-gray-700 leading-relaxed">
                    {noticia.descripcion}
                </p>
            </div>
        </div>
    );
};

// Validar las props con PropTypes
MostrarNoticia.propTypes = {
    noticia: PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
    }).isRequired,
};

export default MostrarNoticia;

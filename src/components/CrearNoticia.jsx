import React, { useState } from 'react';

function CrearNoticia() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState(null);
    const [imagenUrl, setImagenUrl] = useState('');
    
    // Obtiene la URL de la API desde la variable de entorno
    const API_URL = process.env.REACT_APP_API_URL || 'https://promedac.up.railway.app/api';

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        if (imagen) {
            formData.append('imagen', imagen);
        }
    
        try {
            const response = await fetch(`${API_URL}/noticias`, {
                method: 'POST',
                body: formData,
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                alert(`Error: ${errorData.error}`);
                return;
            }
    
            const data = await response.json();
            alert('Noticia creada con éxito');
            setTitulo('');
            setDescripcion('');
            setImagen(null);
        } catch (error) {
            console.error('Error al crear la noticia:', error);
        }
    };
    
    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-6">
            <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-6">Crear Noticia</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Título */}
                <div>
                    <input
                        type="text"
                        placeholder="Título de la noticia"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

                {/* Descripción */}
                <div>
                    <textarea
                        placeholder="Descripción de la noticia"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

                {/* Imagen */}
                <div>
                    <input
                        type="file"
                        onChange={(e) => {
                            setImagen(e.target.files[0]);
                            setImagenUrl(URL.createObjectURL(e.target.files[0]));  // Mostrar imagen previa
                        }}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Previsualización de la imagen */}
                {imagenUrl && (
                    <div className="mt-4 text-center">
                        <img src={imagenUrl} alt="Previsualización" className="max-w-xs mx-auto rounded-lg" />
                    </div>
                )}

                {/* Botón de Enviar */}
                <div className="text-center">
                    <button 
                        type="submit"
                        className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
                    >
                        Crear Noticia
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CrearNoticia;

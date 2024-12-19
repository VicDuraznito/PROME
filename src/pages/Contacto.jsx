import React, { useState} from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/wallpaper2.jpg';
import pin from '../assets/mapas-y-banderas.png'
import phone from '../assets/telefono.png'
import whats from '../assets/whatsapp.png'
import mail from '../assets/email.png'
import axios from 'axios';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    });

    // Obtiene la URL base desde la variable de entorno o usa la predeterminada
    const API_URL = process.env.REACT_APP_API_URL || 'https://promedac.up.railway.app';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/api/contacto`, formData);
            alert('Formulario enviado correctamente');
            setFormData({ nombre: '', email: '', telefono: '', mensaje: ''});
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Hubo un problema al enviar el formulario');
        }
    };

    return (
        <>
        <motion.section
            className="text-gray-600 body-font relative pt-5 mt-10" 
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', 
                color: 'white',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container px-10  py-24 mx-auto flex justify-center items-center">
            {/* Contenedor para la parte izquierda */}
            <div className="lg:w-3/4 md:w-4/5 bg-white bg-opacity-75 rounded-lg p-8 flex flex-col items-center mb-10 md:mb-0">
                <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font">CONTACTANOS</h2>
                <p className="leading-relaxed mb-5 text-gray-800">
                Nos encantaría saber de ti. Completa el siguiente formulario y nos pondremos en contacto contigo pronto.
                </p>
                <p className="text-gray-600">
                Puedes incluir detalles como nuestras políticas de privacidad, horario de atención o cualquier otra información relevante.
                </p>
            </div>


            {/* Contenedor para el formulario de contacto */}
            <div className="container px-10 py-24 mx-auto flex justify-center items-center">
                <div className="g:w-1/2 md:w-2/3 w-full bg-white bg-opacity-80 rounded-lg p-8 flex flex-col md:ml-auto mt-10 md:mt-0 relative z-10 shadow-md">
                    <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font">CONTACTANOS</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-4">
                            <label htmlFor="nombre" className="leading-7 text-base text-gray-800">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-base text-gray-800">Correo electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="telefono" className="leading-7 text-base text-gray-800">Teléfono</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                required
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-base text-gray-800">Mensaje</label>
                            <textarea
                                id="mensaje"
                                name="mensaje" 
                                value={formData.mensaje}
                                onChange={handleChange}
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                required
                            ></textarea>

                        </div>
                        <button className="text-white bg-bluebutton border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Enviar
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Nos importa tu privacidad. No compartiremos tu información con terceros.
                        </p>
                    </form>
                </div>
            </div>
        </div>

        </motion.section>
        </>
    );
};

export default Contacto;

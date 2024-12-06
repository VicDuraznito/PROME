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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/contacto', formData);
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
                                id="message"
                                name="message"
                                value={formData.message}
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

        <section className="text-gray-600 body-font relative mt-28">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    frameBorder="0"
                    title="map"
                    marginHeight="0"
                    marginWidth="0"
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.82229968449514!2d-104.6261575185623!3d24.04037252613803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb7b075c48207%3A0x7cfd698afa99a632!2spromedac!5e0!3m2!1ses!2smx!4v1730903463046!5m2!1ses!2smx"
                ></iframe>

                  
                </div>
            
               

                <div className="lg:w-1/3 md:w-1/2 w-full bg-white flex flex-col md:ml-auto md:py-8 py-4 mt-8 md:mt-0">
                    <h2 className="text-black text-3xl sm:text-4xl mb-4 font-medium title-font pb-6 sm:pb-14">
                        VISÍTANOS
                    </h2>

                    <div className="flex items-center my-4 sm:my-7">
                        <img src={pin} alt="Location pin" className="w-6 h-6 mr-3" />
                        <label htmlFor="address" className="text-base sm:text-lg text-black">
                            Cartagena 116, Guadalupe, 34220 Durango, Dgo.
                        </label>
                    </div>

                    <div className="flex items-center my-4 sm:my-7">
                        <img src={phone} alt="Phone icon" className="w-6 h-6 mr-3" />
                        <label htmlFor="phone" className="text-base sm:text-lg text-black">618 818 4002</label>
                    </div>

                    <div className="flex items-center my-4 sm:my-7">
                        <img src={whats} alt="WhatsApp icon" className="w-6 h-6 mr-3" />
                        <label htmlFor="whatsapp" className="text-base sm:text-lg text-black">618 299 76 42</label>
                    </div>

                    <div className="flex items-center my-4 sm:my-7">
                        <img src={mail} alt="Email icon" className="w-6 h-6 mr-3" />
                        <label htmlFor="email" className="text-base sm:text-lg text-black">promedac@gmail.com</label>
                    </div>
                </div>


            </div>
        </section>


        </>
    );
};

export default Contacto;
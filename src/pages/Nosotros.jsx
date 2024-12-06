import React from 'react';
import { motion } from 'framer-motion'; // Importar motion para animaciones
import videoFile from '../assets/historia.mp4'; // Asegúrate de que la ruta sea correcta
import logo from '../assets/LOGO.png';
import backgroundImage from '../assets/wallpaper.jpg';


const Nosotros = () => {
    // Definir la animación
    const animation = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <motion.div
                className="p-6 " 
                initial="hidden"
                animate="visible"
                variants={animation}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-semibold text-black text-center py-12">NUESTRA HISTORIA</h1>
                <p className='py-12 px-10 text-black w-full text-2xl font-semibold text-center '>
                El Colegio Promedac es una institución educativa privada con más de 50 años de experiencia, nos hemos consolidado como una
                 institución de prestigio en el norte-centro ubicada en Durango, México. 
              
                   
                </p>

                <p className='py-12 px-10 text-black w-full text-2xl font-semibold text-center '>
                Nos especializamos en brindar una educación personalizada, enfocándonos en el desarrollo integral del estudiante a través 
                de un enfoque académico riguroso y un ambiente de valores como la ética, la responsabilidad y el compromiso social. 
                    
                </p>
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4 text-center">Mira nuestro video</h2>
                    <div className="relative w-full h-screen overflow-hidden rounded-lg shadow-lg">
                        <video controls className="absolute top-0 left-0 w-full h-full object-cover">
                            <source src={videoFile} type="video/mp4" />
                            Tu navegador no soporta la etiqueta de video.
                        </video>
                    </div>
                </div>



            </motion.div>

            <motion.div
                className="flex flex-col items-center mb-10 px-8"
                initial="hidden"
                animate="visible"
                variants={animation}
                transition={{ duration: 0.5 }}
            >
                <img className="w-1/2 py-10" src={logo} alt="Logo" />
                <p className="mt-4 text-center text-4xl font-semibold">SER - SABER - CRECER...</p>
            </motion.div>
            

            <section 
            className="text-gray-600 body-font" 
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Para un efecto de parallax
            }}
        >
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-85 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3">VISION</h1>
                            <p className="leading-relaxed mb-3 text-justify">
                                Propiciar y facilitar una educación en la responsabilidad compartida, que colabore con el desarrollo integral de todas las facultades del ser humano, como persona individual, 
                                social y trascendente, consciente de su propio crecimiento, de su compromiso por participar en el desarrollo de la comunidad y de encontrar, él mismo, la finalidad de su existencia.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-85 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3">MISION</h1>
                            <p className="leading-relaxed mb-3 text-justify">
                                Una institución que imparta educación de calidad en congruencia con las necesidades de desarrollo de recursos humanos, desarrollando las competencias que permitan un aprendizaje significativo e incorporando el uno de las nuevas Tecnologías de información con propiedad y eficacia, en un ambiente que fortalezca la identidad nacional, propiciando contacto con entornos multiculturales.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-85 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3">OBJETIVO</h1>
                            <p className="leading-relaxed mb-3 text-justify">
                                Formar jóvenes íntegros con alto nivel académico, una escala de valores éticos bien definida, una identidad fuerte y segura y una conciencia de su compromiso personal, 
                                familiar y social. Jóvenes solidarios que pongan sus talentos al servicio de los demás para lograr cambios positivos en su entorno de influencia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        </>
    );
};

export default Nosotros;


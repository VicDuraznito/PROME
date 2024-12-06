import React from 'react';
import backgroundImage from '../assets/wallpaper3.jpg';
import backgroundImage2 from '../assets/presco4.JPG';
import { motion } from 'framer-motion';


const Preescolar = () => {
    return (
        <>
         <motion.header 
            className="relative w-full h-52 flex items-center justify-center text-center text-white"
            style={{
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
            }}
            initial={{ opacity: 0 }}  // La animación comienza con opacidad 0
            animate={{ opacity: 1 }}  // La animación se mueve a opacidad 1
            transition={{ duration: 1 }}  // Duración de la animación en segundos
        >
            {/* Overlay para oscurecer la imagen de fondo */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Contenido del Header */}
            <div className="relative z-10 px-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Preescolar</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                Descubre nuestros servicios y cómo podemos apoyar el crecimiento académico y personal de tus hijos.
                </p>
            </div>
        </motion.header>

        <motion.div
            className="container mx-auto flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 50 }} // Comienza con opacidad 0 y desplazado hacia abajo
            animate={{ opacity: 1, y: 0 }} // Termina con opacidad 1 y en su posición original
            transition={{ duration: 1 }} // Duración de la animación
        >
            <div className="w-full md:w-1/2 p-4">
                <img
                    src={backgroundImage2}
                    alt="Secundaria"
                    className="rounded-lg shadow-md object-cover w-full h-auto"
                />
            </div>

            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-3xl font-bold text-red-700 mb-4">Preescolar</h2>
                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>Educación integral para niños de 3 a 6 años.</li>
                    <li>Desarrollo de habilidades motrices, cognitivas y emocionales.</li>
                    <li>Enfoque en la creatividad, la comunicación y los primeros pasos en la lectoescritura y matemáticas.</li>
                </ul>
            </div>
        </motion.div>

           
            <section className="w-full bg-white py-20 ">
                
                <h2 className="text-3xl font-bold text-red-700 mb-4 text-center">
                    Documentacion general para alumnos de nuevo ingreso
                </h2>

                
                <ul className="list-disc list-inside py-10 text-black text-lg grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 px-6 md:px-20 lg:px-40">
                    <li>Acta de nacimiento (original y copia).</li>

                    <li>Para 1° de Preescolar: 3 años cumplidos al 31 de diciembre.</li>

                    <li>CURP (Dos copias) de alumno (a) y del padre, madre o tutor</li>

                    <li>Para 2° de Preescolar: 4 años cumplidos al 31 de diciembre.</li>

                    <li>Copia de Cartilla de Vacunación</li>

                    <li>Para 3° de Preescolar: 5 años cumplidos al 31 de diciembre.</li>

                
                </ul>

            </section>




        </>

    );
};

export default Preescolar;
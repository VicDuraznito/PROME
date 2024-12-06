import React, { useState, useEffect } from 'react';

import img3 from '../assets/Imagen4.png';
import img2 from '../assets/Imagen2.png';
import img1 from '../assets/Imagen3.png';

import pres from '../assets/presco3.jpg';

import alum from '../assets/prepa3.jpg';
import sec from '../assets/secu2.jpg';
import prim from '../assets/prima.jpg';

import ejm1 from '../assets/septiembre.jpg';
import ejm2 from '../assets/botarga.jpg';
import ejm3 from '../assets/8m.jpg';

import ox from '../assets/OXFORD.png';
import inst1 from "../assets/inst1.jpeg";
import inst2 from "../assets/inst2.jpeg";
import inst3 from "../assets/inst3.jpeg";
import inst4 from "../assets/inst4.jpeg";


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import MostrarNoticia from '../components/MostrarNoticia';

const images = [img1, img2, img3];

const noticias = [
    {
        titulo: "16 DE SEPTIEMBRE",
        fecha: "16 DE SEPTIEMBRE",
        descripcion: "Conmemoración de la Revolución Mexicana. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imagen: ejm1 // Reemplazar con la ruta de la imagen que desees
    },
    {
        titulo: "8 DE MARZO",
        fecha: "8 DE MARZO",
        descripcion: "Inicio de clases. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imagen: ejm2 // Reemplazar con la ruta de la imagen que desees
    },
    {
        titulo: "CARRERA 2023",
        fecha: "CARRERA 2023",
        descripcion: "Actividades escolares con mascotas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imagen: ejm3 // Reemplazar con la ruta de la imagen que desees
    },
];

const Inicio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia de imagen cada 3 segundos

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="relative w-full max-w-7xl mx-auto h-screen pt-10 overflow-hidden flex flex-col items-center">
                <div className="relative w-full h-full py-10">
                    {images.map((img, index) => (
                        <motion.img
                            key={index}
                            src={img}
                            alt={`slide-${index}`}
                            className="absolute inset-0 w-full h-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: index === currentIndex ? 1 : 0,
                                transition: { duration: 1 },
                            }}
                            exit={{ opacity: 0 }}
                        />
                    ))}

                    {/* Dots de navegación */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full ${
                                    index === currentIndex ? 'bg-white' : 'bg-gray-400'
                                }`}
                                style={{ transition: 'background-color 0.3s ease' }}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
 
  
    
    

      {/* Div adicional debajo del carrusel */}
      <div className="py-16 px-10 text-black w-full text-2xl  font-semibold text-center">
        <p>Ayuda a tus hijos a desarrollar habilidades académicas y emocionales para enfrentar los retos del futuro.
           Con atención personalizada y un enfoque en valores, les brindamos una educación de calidad que impulsa su éxito personal y profesional.</p>
      </div>   
          
      <section className="text-black body-font">
  <div className="container px-4 sm:px-8 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      
      {/* PREESCOLAR */}
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-10 px-4">
        <div className="rounded-lg overflow-hidden">
          <Link
            to="/preescolar"
            className="transform transition duration-200 hover:scale-105 hover:opacity-90 block"
          >
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src={pres} 
                alt="preescolar" 
                className="object-cover object-center w-full h-full"
              />
            </div>
          </Link>
        </div>
        <h2 className="title-font text-lg md:text-2xl font-semibold text-black mt-6 mb-3">PREESCOLAR</h2>
      </div>

      {/* PRIMARIA */}
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-10 px-4">
        <div className="rounded-lg overflow-hidden">
          <Link
            to="/primaria"
            className="transform transition duration-200 hover:scale-105 hover:opacity-90 block"
          >
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src={prim} 
                alt="primaria" 
                className="object-cover object-center w-full h-full"
              />
            </div>
          </Link>
        </div>
        <h2 className="title-font text-lg md:text-2xl font-semibold text-black mt-6 mb-3">PRIMARIA</h2>
      </div>

      {/* SECUNDARIA */}
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-10 px-4">
        <div className="rounded-lg overflow-hidden">
          <Link
            to="/secundaria"
            className="transform transition duration-200 hover:scale-105 hover:opacity-90 block"
          >
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src={sec} 
                alt="secundaria" 
                className="object-cover object-center w-full h-full"
              />
            </div>
          </Link>
        </div>
        <h2 className="title-font text-lg md:text-2xl font-semibold text-black mt-6 mb-3">SECUNDARIA</h2>
      </div>

      {/* PREPARATORIA */}
      <div className="w-full sm:w-1/2 lg:w-1/4 mb-10 px-4">
        <div className="rounded-lg overflow-hidden">
          <Link
            to="/preparatoria"
            className="transform transition duration-200 hover:scale-105 hover:opacity-90 block"
          >
            <div className="aspect-w-4 aspect-h-3">
              <img 
                src={alum} 
                alt="preparatoria" 
                className="object-cover object-center w-full h-full"
              />
            </div>
          </Link>
        </div>
        <h2 className="title-font text-lg md:text-2xl font-semibold text-black mt-6 mb-3">PREPARATORIA</h2>
      </div>

    </div>
  </div>
</section>











        <div className="py-12 px-10 text-black w-full text-2xl  font-semibold text-center">
            <p>Fomentamos el aprendizaje significativo, priorizando el bienestar emocional y académico de tus hijos.
               En nuestro entorno educativo, desarrollan pensamiento crítico, creatividad y responsabilidad, dentro y fuera del aula.</p>
            
        </div>   
        <div className='text-center py-8 text-xl'>
            <Link to="/contacto">
                <button className='bg-bluebutton text-white py-3 px-12 rounded-lg font-medium'>
                    CONTACTANOS
                </button>
            </Link>  
        </div>
        

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <h1 className="text-4xl text-center font-semibold text-black mb-10">NOTICIAS</h1>

                    {/* Main Article */}
                    {/* <div className="flex flex-wrap w-full bg-gray-100 mb-6">
                        <div className="w-1/2 p-6">
                            <img
                                alt="20 de Noviembre"
                                className="w-full h-full object-cover rounded-md"
                                src={ejm1}
                            />
                        </div>
                        <div className="w-1/2 p-6 flex flex-col justify-center">
                            <h2 className="text-2xl font-semibold mb-2 text-black">16 DE SEPTIEMBRE</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Conmemoración de la Revolución Mexicana. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, arcu eget viverra efficiturLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, arcu eget viverra efficitur.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, arcu eget viverra efficitur..
                            </p>
                        </div>
                    </div> */}

                    {/* Two Smaller Articles */}
                    <div className="flex flex-wrap -mx-2">
                        <div className="px-2 w-1/2">
                            <div className="bg-gray-100 p-6 flex flex-col items-center">
                                <img
                                    alt="8 de Agosto"
                                    className="w-full object-cover h-64 mb-4 rounded-md"
                                    src={ejm3}
                                />
                                <h2 className="text-xl font-semibold mb-2 text-black">8 DE MARZO</h2>
                                <p className="text-gray-700 text-center">
                                    Inicio de clases. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, arcu eget viverra efficitur.
                                </p>
                            </div>
                        </div>
                        <div className="px-2 w-1/2">
                            <div className="bg-gray-100 p-6 flex flex-col items-center">
                                <img
                                    alt="Mascotas del Colegio"
                                    className="w-full object-cover h-64 mb-4 rounded-md"
                                    src={ejm2}
                                />
                                <h2 className="text-xl font-semibold mb-2 text-black">CARRERA 2023</h2>
                                <p className="text-gray-700 text-center">
                                    Actividades escolares con mascotas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, arcu eget viverra efficitur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="text-gray-600 body-font">
                <div className="container mx-auto px-5 py-24">
                    <h1 className="text-4xl font-semibold text-black text-center mb-10">CONVENIOS</h1>

                    <div className="grid gap-12">


                        <div className="flex flex-wrap bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="w-full md:w-1/2">
                                <img src={ox} alt="Oxford Quality" className="object-cover w-full h-full" />
                            </div>
                            <div className="w-full md:w-1/2 bg-bluebutton p-12 flex flex-col justify-center text-white">
                                <h2 className="text-2xl font-semibold mb-6">Acreditación Oxford Quality</h2>
                                <p className="leading-relaxed mb-10">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend, arcu eget viverra efficitur, orci ipsum tincidunt tortor, at convallis orci felis at libero. Sed scelerisque vel odio ac tristique.
                                </p>
                                <a href="https://elt.oup.com/feature/global/oxford-quality/" className="inline-flex items-center px-6 py-2 text-white bg-bluebutton font-semibold rounded border-2 border-white hover:text-bluebutton hover:bg-white transition duration-300 mx-auto">
                                    SABER MÁS...
                                </a>
                            </div>
                        </div>
              </div>
          </div>
      </section>
      <section className=" py-12">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-semibold text-black text-center mb-10">INSTITUCIONES ALIADAS</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center py-9">
                {/* Logo 1 */}
                <img
                    src={inst1}
                    alt="Institución 1"
                    className="h-28 w-auto"
                />
                {/* Logo 2 */}
                <img
                    src={inst2}
                    alt="Institución 2"
                    className="h-28 w-auto"
                />
                {/* Logo 3 */}
                <img
                    src={inst3}
                    alt="Institución 3"
                    className="h-28 w-auto"
                />
                {/* Logo 4 */}
                <img
                    src={inst4}
                    alt="Institución 4"
                    className="h-28 w-auto"
                />
            </div>
        </div>
    </section>





      






        </>
    );
};

export default Inicio;
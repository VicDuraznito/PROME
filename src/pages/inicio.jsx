import React, { useState, useEffect } from "react";

import img3 from "../assets/Imagen4.png";
import img2 from "../assets/Imagen2.png";
import img1 from "../assets/Imagen3.png";

import presco from "../assets/prescolar3.JPG";

import alumnos from "../assets/preparatoria3.JPG";
import secundaria from "../assets/seec.JPG";
import prim from "../assets/prima.JPG";

import ox from "../assets/OXFORD.png";
import inst1 from "../assets/inst1.jpeg";
import inst2 from "../assets/inst2.jpeg";
import inst3 from "../assets/inst3.jpeg";
import inst4 from "../assets/inst4.jpeg";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MostrarNoticia from "../components/MostrarNoticia";

const images = [img1, img2, img3];

const Inicio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Obtiene la URL base desde la variable de entorno o usa la predeterminada
  const API_URL = process.env.REACT_APP_API_URL || 'https://promedac.up.railway.app';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const fetchNoticias = async () => {
    try {
      const response = await fetch(`${API_URL}/api/noticias`); // Usa la URL de producción de Railway
      if (!response.ok) {
        throw new Error('Error al obtener noticias');
      }
      const data = await response.json();
      setNoticias(data); // Guardar las noticias en el estado
      setIsLoading(false);
    } catch (error) {
      console.error('Error al obtener noticias:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNoticias();
  }, []);

  return (
    <>
      <div className="relative w-screen max-w-full mx-auto h-screen pt-10 px-12 overflow-hidden flex flex-col items-center">
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
                  index === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
                style={{ transition: "background-color 0.3s ease" }}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-10 text-black w-full text-2xl  font-semibold text-center">
        <p>
          Ayuda a tus hijos a desarrollar habilidades académicas y emocionales
          para enfrentar los retos del futuro. Con atención personalizada y un
          enfoque en valores, les brindamos una educación de calidad que impulsa
          su éxito personal y profesional.
        </p>
      </div>

      <section className="text-black body-font">
        <div className="container px-4 sm:px-8 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            {/* PREESCOLAR */}
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-10 px-4">
              <div className="rounded-lg overflow-hidden">
                <Link to="/preescolar">
                  <img src={presco} alt="preescolar" className="object-cover w-full" />
                </Link>
              </div>
              <h2 className="title-font text-lg md:text-2xl font-semibold text-black mt-6 mb-3">
                PREESCOLAR
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div id="noticias" className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl text-center font-semibold text-black mb-10">NOTICIAS</h1>

          {isLoading ? (
            <p className="text-center text-gray-500">Cargando noticias...</p>
          ) : (
            <div className="flex flex-wrap -mx-2">
              {noticias.map((noticia) => (
                <MostrarNoticia key={noticia.id} noticia={noticia} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Inicio;

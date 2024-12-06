import React from 'react';
import backgroundImage from '../assets/wallpaper3.jpg';
import backgroundImage2 from '../assets/wallpaper4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Preparatoria = () => {
    const slides = [
        {
            title: 'Educación de Calidad',
            description: 'Formación académica sólida enfocada en preparar a los estudiantes para universidades de prestigio.',
            image: backgroundImage,
        },
        {
            title: 'Desarrollo Integral',
            description: 'Fomentamos habilidades de liderazgo, ética y responsabilidad social.',
            image: backgroundImage2,
        },
        {
            title: 'Innovación Educativa',
            description: 'Uso de tecnología y metodología actualizada para el aprendizaje.',
            image: backgroundImage,
        },
    ];

    return (
        <>
            {/* Header con imagen de fondo */}
            <motion.header
                className="relative w-full h-52 flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 px-6">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Preparatoria</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Descubre nuestros servicios y cómo podemos apoyar el crecimiento académico y personal de tus hijos.
                    </p>
                </div>
            </motion.header>

            {/* Carrusel interactivo */}
            <section className="py-20 bg-gray-50">
                <h2 className="text-4xl font-bold text-center text-red-700 mb-8">Preparatoria</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet', // Personaliza los puntos
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            {/* Grid layout con imagen a la izquierda y texto a la derecha */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Imagen */}
                                <div className="w-full h-auto">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="rounded-lg shadow-lg object-cover w-full h-72"
                                    />
                                </div>

                                {/* Texto */}
                                <div className="w-full p-4 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-red-700 mb-4">{slide.title}</h3>
                                    <p className="text-lg text-black mb-4">{slide.description}</p>
                                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                                        <li>Educación integral para niños de 3 a 6 años.</li>
                                        <li>Desarrollo de habilidades motrices, cognitivas y emocionales.</li>
                                        <li>Enfoque en la creatividad, la comunicación y los primeros pasos en la lectoescritura y matemáticas.</li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Documentación */}
            <section className="w-full bg-white py-20">
                <h2 className="text-3xl font-bold text-red-700 mb-4 text-center">
                    Documentación general para alumnos de nuevo ingreso
                </h2>
                <ul className="list-disc list-inside py-10 text-black text-lg grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 px-6 md:px-20 lg:px-40">
                    <li className="min-h-[60px]">Acta de nacimiento (original y copia).</li>
                    <li className="min-h-[60px]">CURP (Dos copias) de alumno (a).</li>
                    <li className="min-h-[60px]">Certificado de Secundaria (original y copia)</li>
                    <li className="min-h-[60px]">Boleta oficial de calificaciones (original y copia) de 3° de secundaria (hasta el mes que tenga registrado al día de la inscripción) o del semestre anterior a cursar (hasta 4° semestre).</li>
                    <li className="min-h-[60px]">Carta de buena conducta.</li>
                    <li className="min-h-[60px]">6 Fotografías tamaño infantil (Blanco y Negro, No Instantáneas).</li>
                </ul>
            </section>
        </>
    );
};

export default Preparatoria;

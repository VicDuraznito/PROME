import React, { useState } from 'react';
import logo from '../assets/LOGO.png';
import phone from '../assets/icons8-phone-50.png';
import whats from '../assets/icons8-whatsapp-50.png';
import eng from '../assets/icons8-config-50.png';
import men from '../assets/menu2.png';
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Tira superior */}
            <div className="h-14 bg-blueking text-sm px-4 py-1 flex justify-between items-center space-x-2">
                <div className="text-sm flex items-center space-x-2">
                    <img src={phone} alt="phone" className="h-4 w-auto" />
                    <span className="!text-white">618 818 4002</span>
                    <img src={whats} alt="whats" className="h-4 w-auto" />
                    <span className="!text-white">618 818 4002</span>
                </div>
                {/* Imagen eng al extremo derecho */}
                {/* LOGIN */}
                <button>
                    <Link to="/login" className="text-letter text-xl font-bold px-3 py-2 rounded-md transition transform hover:scale-105 hover:text-blueking"><img src={eng} alt="engine" className="h-5 w-auto" /></Link>
                </button>

            </div>

            {/* Barra de navegación */}
            <nav className="relative z-40 h-28 bg-white shadow text-bg w-full">
                <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

                    {/* Logo con la imagen importada */}
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="h-32 w-auto mt-11" />
                    </div>

                    {/* INICIO */}
                    <div className="hidden md:flex space-x-12 mr-44 pt-9">
                        <Link smooth to="/" className="text-letter text-xl font-bold px-3 py-2 rounded-md transition transform hover:scale-105 hover:text-blueking">INICIO</Link>

                        {/* Dropdown */}
                        <div className="relative group">
                            <button className="text-letter text-xl font-bold px-3 py-2 rounded-md transition transform hover:scale-105 hover:text-blueking">
                                OFERTA EDUCATIVA
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-20 group-focus-within:block">
                                <div className="space-y-2 py-2">
                                    <Link smooth to="/preescolar" className="block px-4 py-2 text-letter hover:bg-gray-100">PREESCOLAR</Link>
                                    <Link smooth to="/primaria" className="block px-4 py-2 text-letter hover:bg-gray-100">PRIMARIA</Link>
                                    <Link smooth to="/secundaria" className="block px-4 py-2 text-letter hover:bg-gray-100">SECUNDARIA</Link>
                                    <Link smooth to="/preparatoria" className="block px-4 py-2 text-letter hover:bg-gray-100">PREPARATORIA</Link>
                                </div>
                            </div>
                        </div>
                        <Link smooth to="/#noticias" className="text-letter text-xl font-bold px-3 py-2 rounded-md transition transform hover:scale-105 hover:text-blueking">NOTICIAS</Link>
                        <Link smooth to="/nosotros" className="text-letter text-xl font-bold px-3 py-2 rounded-md transition transform hover:scale-105 hover:text-blueking">NOSOTROS</Link>
                        <Link smooth to="/contacto" className="text-letter text-xl font-bold px-3 py-2 rounded-md transition transform hover:scale-105 hover:text-blueking">CONTACTO</Link>
                    </div>

                    {/* Botón de menú para pantallas pequeñas */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <img src={men} alt="Menu" className="h-6 w-6" />
                        </button>
                    </div>

                </div>

                {/* Menú desplegable para pantallas pequeñas */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-blueking text-white z-50"> {/* Cambiado a posición absolute y top-full */}
                        <Link to="/" className="block px-4 py-2 hover:bg-blue-700 transition transform hover:scale-105">INICIO</Link>
                        <div className="relative group">
                            <button className="block px-4 py-2 text-white hover:bg-blue-700 transition transform hover:scale-105">
                                OFERTA EDUCATIVA
                            </button>
                            <div className="space-y-2 py-2 pl-4">
                                <Link to="/preescolar" className="block px-4 py-2 text-white hover:bg-gray-700">PREESCOLAR</Link>
                                <Link to="/primaria" className="block px-4 py-2 text-white hover:bg-gray-700">PRIMARIA</Link>
                                <Link to="/secundaria" className="block px-4 py-2 text-white hover:bg-gray-700">SECUNDARIA</Link>
                                <Link to="/preparatoria" className="block px-4 py-2 text-white hover:bg-gray-700">PREPARATORIA</Link>
                            </div>
                        </div>
                        <Link to="/nosotros" className="block px-4 py-2 hover:bg-blue-700 transition transform hover:scale-105">NOSOTROS</Link>
                        <Link to="/contacto" className="block px-4 py-2 hover:bg-blue-700 transition transform hover:scale-105">CONTACTO</Link>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;

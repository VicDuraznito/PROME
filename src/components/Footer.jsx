
import React from 'react';

import phone from '../assets/icons8-phone-50.png';
import mail from '../assets/icons8-mail-50.png';
import pin from '../assets/icons8-pin-50.png';


import face from '../assets/icons8-facebook-50.png';
import insta from '../assets/icons8-instagram-64.png';
import { Link } from 'react-router-dom';
import wha from '../assets/icons8-whatsapp-50.png';



const Footer = () => {
  return (
    <footer className="w-full h-64 bg-blueking text-white py-4 overflow-hidden">
      <div className="container mx-auto px-8 max-w-full">
        {/* Contenedor principal con dos columnas */}
        <div className="flex justify-between w-full space-x-8">
          {/* Columna izquierda */}
          <div className="flex flex-col  space-y-6 flex-1">
            <div className="flex items-center">
            <Link to="/contacto" className="text-lg font-semibold hover:underline hover:text-gray-300 transition duration-200 ease-in-out">
                Contactanos
              </Link>
            </div>

            {/* Información de contacto */}
            <div className="flex items-center space-x-4 mt-6">
              <img src={phone} alt="phone" className="h-5 w-auto mr-4" />
              <p>618 818 05 11</p>
              <img src={wha} alt="whatsapp" className="h-5 w-auto mr-4" />
              <p>618 818 05 11</p>
            </div>
            <div className="flex items-center space-x-4">
              <img src={mail} alt="mail" className="h-5 w-auto mr-4" />
              <p>Promedac@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <img src={pin} alt="pin" className="h-5 w-auto mr-4" />
              <a 
                href="https://maps.app.goo.gl/baUgBorD6iN7BAzTA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-300 transition duration-200 ease-in-out"
              >
                Cartagena 116, Guadalupe, 34220 Durango, Dgo.
              </a>
            </div>
            <div className="mt-4 text-xs">
              <p>© 2024 Colegio Promedac</p>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col items-center pl-16 space-y-6 flex-1">
            <div className="flex items-center">
              <p className="text-lg font-semibold">¡Síguenos en nuestras redes!</p>
            </div>
            

            {/* Íconos de redes sociales */}
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://www.facebook.com/PromedacColegio/?locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition duration-200 hover:scale-110 hover:opacity-80"
              >
                <img src={face} alt="Facebook" className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/promedac_colegio/?hl=es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition duration-200 hover:scale-110 hover:opacity-80"
              >
                <img src={insta} alt="Instagram" className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/PrepaPromedac/?locale=es_LA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition duration-200 hover:scale-110 hover:opacity-80"
              >
                <img src={face} alt="Facebook" className="h-6 w-6" />
              </a>
            </div>
            
            
            <div className="mt-4 text-base">
              <p>Aviso de privacidad</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







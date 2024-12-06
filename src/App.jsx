import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/inicio';
import Preescolar from './pages/Preescolar';
import Primaria from './pages/Primaria';
import Secundaria from './pages/Secundaria';
import Preparatoria from './pages/Preparatoria';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import ScrollToTop from './components/ScrollToTop';
import React from "react";
import Chatbot from "./chatbot/Chatbot";
import Login from "./pages/Login";
import Admin from "./pages/Admin";



function App() {
    return (
        <div className="nav">
            <Navbar />
            {/* <ScrollToTop /> */}
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/preescolar" element={<Preescolar />} />
                <Route path="/primaria" element={<Primaria />} />
                <Route path="/secundaria" element={<Secundaria />} />
                <Route path="/preparatoria" element={<Preparatoria />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Chatbot />
            <Footer />
        </div>
    );
};

export default App;

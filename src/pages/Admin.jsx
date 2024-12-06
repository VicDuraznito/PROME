import React from 'react';
import CrearNoticia from '../components/CrearNoticia';

function Admin() {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-6">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Panel de Administración</h1>
                <CrearNoticia />
            </div>
        </div>
    );
}

export default Admin;


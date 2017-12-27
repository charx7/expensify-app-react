// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'; // Importaciones Necesarias para establecer el routeo

// Prueba
const NoEncontradoPagina = () => (
    <div>
        404 No Encontrado - 
        <Link to = "/">
             HOME
        </Link>
    </div>
);

export default NoEncontradoPagina;
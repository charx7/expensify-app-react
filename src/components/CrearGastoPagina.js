// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
// Importacion de la forma de Gasto
import FormaGasto from  './FormaGasto';

// Componente de Crear Gasto
const CrearGastoPagina = () => (
    <div>
        <h1>Agregar Gasto</h1>
        {/* Renderemos la forma de Gasto*/}
        <FormaGasto />
    </div>
);

export default CrearGastoPagina;
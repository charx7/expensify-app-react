// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
// Importando nuestro componente
import ListaGastos from './ListaGastos';

// Prueba
const GastoDashboardPagina = () => (
    <div>
        {/* Rendereamos la lista de gastos del componente importado*/}
        <ListaGastos/>
    </div>
);

export default GastoDashboardPagina;
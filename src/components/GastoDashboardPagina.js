// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
// Importando nuestro componente
import ListaGastos from './ListaGastos';
import FiltrosListaGasto from './FiltrosListaGastos'; // Importacion del componente de filtros

// Prueba
const GastoDashboardPagina = () => (
    <div>
        {/* Importamos el componente que se encarga de hacer set a los parametros del filtro*/}
        <FiltrosListaGasto/>
        {/* Rendereamos la lista de gastos del componente importado*/}
        <ListaGastos/>
    </div>
);

export default GastoDashboardPagina;
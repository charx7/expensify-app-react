// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
// Importando nuestro componente
import ListaGastos from './ListaGastos';
import FiltrosListaGasto from './FiltrosListaGastos'; // Importacion del componente de filtros
import DesplegadoSumaGastos from  './DesplegadoSumaGastos'; // Importacion del componente que despliega la suma de los gastos

// Prueba
const GastoDashboardPagina = () => (
    <div>
        {/* Componente que se encarga de sumar los gastos desplegados*/}
        <DesplegadoSumaGastos/> 
        {/* Importamos el componente que se encarga de hacer set a los parametros del filtro*/}
        <FiltrosListaGasto/>
        {/* Rendereamos la lista de gastos del componente importado*/}
        <ListaGastos/>
    </div>
);

export default GastoDashboardPagina;
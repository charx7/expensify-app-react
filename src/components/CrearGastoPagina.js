// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
// Importacion de la forma de Gasto
import FormaGasto from  './FormaGasto';
// Importaciones de Redux
import { connect } from 'react-redux';
import { agregarGasto } from '../acciones/gastos'; // Importacion de la accion para agregar gasto

// Componente de Crear Gasto
const CrearGastoPagina = (props) => (
    <div>
        <h1>Agregar Gasto</h1>
        {/* Renderemos la forma de Gasto*/}
        <FormaGasto
            onSubmit = { (gasto) => {
                // Llamamos al dispatch de accion con las propiedades de gasto pasadas para que se almacenen en el Store
                props.dispatch(agregarGasto(gasto));
                // Mandamos al usuario al dashboard
                props.history.push('/');
            }}
        />
    </div>
);

// Export y link al metodo connect del almacen de redux
export default connect() (CrearGastoPagina);
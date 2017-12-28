import React from 'react';
import { connect } from 'react-redux';
import { setFiltroTexto } from '../acciones/filtros'; // importamos la accion de modificar el texto del filtro

const FiltrosListaGasto = (props) => (
    <div>
        <input 
            type='text' 
            value={props.filtros.texto}
            /* Metodo que ejecuta una funcion cuando se hace submit al input en este caso cambia los filtros*/
            onChange = { (e) => {
                props.dispatch(setFiltroTexto(e.target.value));
                console.log(e.target.value)
            }}
        />
    </div>
);

// Funcion de mapeo de los elementos del almacen a los props 
const mapeoEstadoAProps = (estado) => {
    return {
        filtros: estado.filtros
    };
};

// Exportaciones con conexion al almacen
export default connect(mapeoEstadoAProps)(FiltrosListaGasto);
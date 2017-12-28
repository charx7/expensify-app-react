import React from 'react';
import { connect } from 'react-redux';
import { setFiltroTexto, filtroOrdenarPorFecha, filtroOrdenarPorMonto  } from '../acciones/filtros'; // importamos la accion de modificar el texto del filtro

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
        <select value={props.filtros.opcionOrdenar} onChange={ (e) => {
            if ( e.target.value == 'fechaSelector') {
                props.dispatch(filtroOrdenarPorFecha());
            } else {
                props.dispatch(filtroOrdenarPorMonto());
            }
        }}>
            <option value='fechaSelector'>Fecha</option>
            <option value='montoSelector'>Monto</option>
        </select>
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
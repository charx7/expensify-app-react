// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
// Importacion de connect de React redux
import { connect } from 'react-redux';

// Componente de Editar Gasto
const EditarGastoPagina = (props) => {
    console.log(props);
    return (
        <div>
            Editando el Gasto con ID de {props.match.params.id}
        </div>
    );
};

// Mapeo del estado del almacen a props
const mapeoEstadoAProps = (estado, props) => {
    return {
        // Buscamos en el arreglo de gastos del almacen para que nos devuelva el objeto con las propiedades indicadas
        gasto: estado.gastos.find( (gasto) => {
            // Verifica si el argumento pasado tiene el mismo id que el del almacen
            return gasto.id == props.match.params.id;
        })
    };
};

// Conexion con el Store
export default connect(mapeoEstadoAProps) (EditarGastoPagina);
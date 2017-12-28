import React from  'react';
import { connect } from 'react-redux';

// Componente que mostrara la lista de gastos
// Gracias al almacen STORE cuando este se modifica el componente se renderea con valores nuevos muy parecido a los estados
const ListaGastos = (props) => (
    <div>
        <h1>Lista de Gastos</h1>
        {props.filtros.texto}
        {props.gastos.length}
    </div>
);

// Funcion que se encarga de hacer las conexiones de estado a los props que se pasaran 
const mapeoEstadoaProps = (estado) => {
    return {
        gastos: estado.gastos,
        filtros: estado.filtros
    };
}; 

// Conectamos el componente Lista de Gastos con la api connect de react=redux para tener acceso a los estados
// y lo exportamos
export default connect(mapeoEstadoaProps)(ListaGastos);
import React from  'react';
import { connect } from 'react-redux'; // Redux para hacer sync con el almacen
import ListaGastoItem from './ListaGastosItem'; // importacion del componente individual de Gasto
import gastosSeleccionados from '../selectores/selectorGastos'; // Importacion del seleccionador

// Componente que mostrara la lista de gastos
// Gracias al almacen STORE cuando este se modifica el componente se renderea con valores nuevos muy parecido a los estados
const ListaGastos = (props) => (
    <div>
        <h1>Lista de Gastos</h1>
        {/* Hacemo un mapeo de los elementos que importamos del estado y pasamos sus caracteristicas como
         props para renderear una instancia por cada uno de los gastos guardados*/}
        {
            props.gastos.map((elemento) => {
                return <ListaGastoItem
                        key = {elemento.id}
                        currentDescripcion = {elemento.descripcion}
                        currentMonto = {elemento.monto}
                        currentCreadoEn = {elemento.creadoEn}
                        currentId = {elemento.id}
                        />
            })
        }
    </div>
);

// Funcion que se encarga de hacer las conexiones de estado a los props que se pasaran 
const mapeoEstadoaProps = (estado) => {
    return {
        // Pasa un prop al componente ListadeGastos basado en el mapeo del almacen y filtrados con la funcion de selectorGastos
        gastos: gastosSeleccionados(estado.gastos, estado.filtros)
    };
}; 

// Conectamos el componente Lista de Gastos con la api connect de react=redux para tener acceso a los estados
// y lo exportamos
export default connect(mapeoEstadoaProps)(ListaGastos);
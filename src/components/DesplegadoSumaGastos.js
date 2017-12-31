import React from 'react';
import { connect } from 'react-redux';
import gastosSeleccionados from '../selectores/selectorGastos'; // Importaciones del filtro
import sumaGastosVisibles from '../selectores/gastosTotales'; // Importacion del modulo que hace la suma de los gastos seleccionados
import numeral from 'numeral'; // Importaciones de node_modules para formato de montos

// Creamos un componente de clase 
const DesplegadoSumaGastos = (props) => (
    <div>
        {/* Aca va el reesultado de la suma de los gasot*/}
        <p>
            Viendo {props.gastosVisibles.length} gasto{props.gastosVisibles.length == 1 ? ' ' : 's '} 
            sumando: {numeral(sumaGastosVisibles(props.gastosVisibles)/100).format('$0,0.[00]')}
        </p>
    </div>
);

// Funcion de mapeo del estado a los props que se pasan al componente
const mapeoEstadoAProps = (estado) => {
    return {
        // Pasa un prop al componente ListadeGastos basado en el mapeo del almacen y filtrados con la funcion de selectorGastos
        gastosVisibles: gastosSeleccionados(estado.gastos, estado.filtros)
    }
}

// Exportaciones con conexion al almacen
export default connect(mapeoEstadoAProps)(DesplegadoSumaGastos);
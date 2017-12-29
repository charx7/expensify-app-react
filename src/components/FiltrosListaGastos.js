import "react-dates/initialize"; // Importacion nueva necesaria para que sirva el calendario
import 'react-dates/lib/css/_datepicker.css' // Importacion del CSS
import React from 'react';
import { connect } from 'react-redux';
import { setFiltroTexto, filtroOrdenarPorFecha, filtroOrdenarPorMonto,
         filtroFechaInicio, filtroFechaFinal } from '../acciones/filtros'; // importamos la accion de modificar el texto del filtro
import { DateRangePicker } from 'react-dates'; // Importaciones para el picker de las fechas

// Componente de clase porque usaremos un estado para manejar el calendario
class FiltrosListaGasto extends React.Component{
    state = {
        focusCalendario: null
    };

    // Metodo encargado de la logica del cambio de fechas
    onDateChange = ( { startDate, endDate } ) => {
        // Llamamos a las acciones que modifican las fechas de los filtros en el almacen
        this.props.dispatch(filtroFechaInicio(startDate));
        this.props.dispatch(filtroFechaFinal(endDate));
    };

    // Metodo de cambio de foco del calendario picker
    onFocusChange = (focusCalendario) => {
        this.setState(() => ({focusCalendario: focusCalendario}));
    };

    render() {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filtros.texto}
                    /* Metodo que ejecuta una funcion cuando se hace submit al input en este caso cambia los filtros*/
                    onChange = { (e) => {
                        this.props.dispatch(setFiltroTexto(e.target.value));
                        console.log(e.target.value)
                    }}
                />
                <select value={this.props.filtros.opcionOrdenar} onChange={ (e) => {
                    if ( e.target.value == 'fechaSelector') {
                        this.props.dispatch(filtroOrdenarPorFecha());
                    } else {
                        this.props.dispatch(filtroOrdenarPorMonto());
                    }
                }}>
                    <option value='fechaSelector'>Fecha</option>
                    <option value='montoSelector'>Monto</option>
                </select>
                <DateRangePicker
                    startDate     = {this.props.filtros.fechaInicio}
                    endDate       = {this.props.filtros.fechaFinal}
                    onDatesChange = {this.onDateChange}
                    focusedInput  = {this.state.focusCalendario}
                    onFocusChange = {this.onFocusChange}
                    showClearDates = {true}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                    startDateId   = {'startDate'}
                    endDateId     = {'endDate'}
                />
            </div>
        );
    }
}

// Funcion de mapeo de los elementos del almacen a los props 
const mapeoEstadoAProps = (estado) => {
    return {
        filtros: estado.filtros
    };
};

// Exportaciones con conexion al almacen
export default connect(mapeoEstadoAProps)(FiltrosListaGasto);
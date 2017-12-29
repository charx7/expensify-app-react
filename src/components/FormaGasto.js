// Archivo que contiene la logica de la forma para editar o crear un gasto
import "react-dates/initialize"; // Importacion nueva necesaria para que sirva el calendario
import React from  'react';
import moment from 'moment'; // Importacion de momentos
import { SingleDatePicker } from 'react-dates'; // Importacion de React Dates
import 'react-dates/lib/css/_datepicker.css' // Importacion del CSS

// Creamos un objeto de la libreria moment
const now = moment();
console.log(now.format('MMM Do, YYYY'));

// Componente de clase
export default class FormaGasto extends React.Component{
    // Override al constructor
    constructor(props) {
        // Llamamos al constructor de la clase padre
        super(props);
        // Estado del componente que mantiene track de los cambios de los inputs y el textarea
        this.state = {
            descripcion: props.gastoEditar ? props.gastoEditar.descripcion : '',
            nota: props.gastoEditar ? props.gastoEditar.nota : '',
            monto: props.gastoEditar ? (props.gastoEditar.monto /100).toString() : '',
            creadoEn: props.gastoEditar ? moment(props.gastoEditar.creadoEn) : moment(),
            calendarFocused: false,
            error: ''
        }; 
    }
    // Metodo que se encarga de cambiar el estado de descripcion del componente
    cambioDescripcion = (e) => {
        // Recupera el valor del input de texto de descripcion
        const descripcionForma = e.target.value;
        // Cambia el estado del componente con el objeto del input de descripcion
        this.setState( () => ({
            descripcion: descripcionForma
        }));
    }
    // Metodo que se encarga del cambio el estado del componente de nota
    cambioNota = (e) => {
        // Jala el valor puesta en el area de texto de la forma
        const notaForma = e.target.value;
        // Cambio del estado del componente segun el valor del area de texto
        this.setState( () => ({ nota: notaForma }));
    }
    // Metodo que se encarga del cambio de estado de monto
    cambioMonto = (e) => {
        // Jalamos el valor del input
        const montoForma = e.target.value;
        // Logica de verificacion del input el non-sense es una regular-expression que se encarga de verificar si es un
        // numero con 2 decimales maximo
        if( !montoForma || montoForma.match( /^\d{1,}(\.\d{0,2})?$/ )) {
            // Cambio del estado
            this.setState( () => ({ monto: montoForma}));
        }
    };
    // Metodo que se encarga de manipular el estado de Fecha segun el calendario chevere de la libreria 3rd party
    cambioFecha = (creadoEnForma) => {
        if(creadoEnForma) {
            this.setState(() => ({ creadoEn: creadoEnForma }));
        }
    };
    // Metodo de cambio de focus cuando se manipula el calendarito chevere
    enCambioCalendarFocused = ({ focused }) => {
        this.setState( () => ({ calendarFocused: focused }));
    };
    // metodo para submit de la forma
    submitForma = (e) => {
        // Para que no ocurra un full refresh cuando el user le da click
        e.preventDefault();
        if(this.state.monto && this.state.descripcion) {
            // Limpiar el error
            console.log('Submited!');
            this.setState( () => ({ error: '' }));
            // Llamamos al metodo que pasamos como prop que se encarga de agregar los datos al almacen
            // Y le pasamos el objeto con los valores del estado
            this.props.onSubmit({
                descripcion: this.state.descripcion,
                monto: parseFloat(this.state.monto,10) * 100,
                creadoEn: this.state.creadoEn.valueOf(),
                nota: this.state.nota
            });
        } else {
            // Poners un error
            console.log('error');
            this.setState( () => ({ error: 'Error XD Porfis capture descripcion y monto.' }));
        }
    };
    // Rendereo del componente
    render () {
        return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.submitForma}>
                <input type="text"
                    placeholder='descripcion'
                    // Hace que se autoseleccione la forma al renderear el componente
                    autoFocus
                    value = {this.state.descripcion}
                    onChange = {this.cambioDescripcion}
                 />
                 <input type="text"
                    placeholder='monto'
                    value = {this.state.monto}
                    onChange = {this.cambioMonto}
                  />
                <textarea 
                    placeholder='Agregar Nota para tu gasto (opcional)'
                    value = {this.state.nota}
                    onChange = {this.cambioNota}
                >
                </textarea>
                <button>Agregar Gasto</button>
            </form>
            {/* Importaciones del componente de Single date picker de react-dates*/}
            <SingleDatePicker
                // Props necesarios para que funcione el calendario
                date = {this.state.creadoEn}
                onDateChange = {this.cambioFecha}
                focused = {this.state.calendarFocused}
                onFocusChange = {this.enCambioCalendarFocused}
                numberOfMonths = {1}
                isOutsideRange = {(day) => false }
            />
        </div>
        )
    }
}


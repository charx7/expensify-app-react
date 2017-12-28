// Archivo que contiene la logica de la forma para editar o crear un gasto
import React from  'react';

// Componente de clase
export default class FormaGasto extends React.Component{
    // Estado del componente que mantiene track de los cambios de los inputs y el textarea
    state = {
        descripcion: '',
        nota: '',
        monto: ''
    };
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
        if( montoForma.match( /^\d*(\.\d{0,2})?$/ )) {
            // Cambio del estado
            this.setState( () => ({ monto: montoForma}));
        }
    } 
    // Rendereo del componente
    render () {
        return (
        <div>
            <form>
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
        </div>
        )
    }
}


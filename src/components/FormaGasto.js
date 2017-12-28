// Archivo que contiene la logica de la forma para editar o crear un gasto
import React from  'react';

// Componente de clase
export default class FormaGasto extends React.Component{
    // Estado del componente que mantiene track de los cambios de los inputs y el textarea
    state = {
        descripcion: '',
        nota: ''
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
                 <input type="number"
                    placeholder='monto'
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


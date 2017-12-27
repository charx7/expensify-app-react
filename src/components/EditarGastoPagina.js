// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';

// Componente de Editar Gasto
const EditarGastoPagina = (props) => {
    
    console.log(props);

    return (
        <div>
            Editando el Gasto con ID de {props.match.params.id}
        </div>
    );
};

export default EditarGastoPagina;
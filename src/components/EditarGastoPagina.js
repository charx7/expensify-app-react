// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
// Importacion de connect de React redux
import { connect } from 'react-redux';
import FormaGasto from  './FormaGasto'; // Importamos la forma de gasto
import { editarGasto, empiezaRemoverGasto, empiezaEditarGasto } from '../acciones/gastos'; // Importamos la accion de editar gasto

// Componente de Editar Gasto
const EditarGastoPagina = (props) => {
    return (
        <div>
            Editando el Gasto con ID de {props.match.params.id}
            <FormaGasto
                gastoEditar = {props.gasto} 
                onSubmit = {(gasto) => {
                    console.log('Editando ', gasto);
                    // Mandar la nueva info de gasto a la accion de editar
                    props.dispatch(empiezaEditarGasto(props.match.params.id, gasto));
                    // Redirigir a la pagina de dashboard
                    props.history.push('/');
                }}
            />
            <button 
                onClick = { () => {
                    // Llamado a la accion que remueve un gasto del almacen
                    props.dispatch(empiezaRemoverGasto({id: props.match.params.id}));
                    // Redirigir a la pagina de Dashboard
                    props.history.push('/');
                }}
            >
                Eliminar
            </button>
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
// Exportar un componente sin estado funcional
// renderear descripcion monto y creado en
import React from  'react';
import { connect } from 'react-redux'; // Importador de la conexion al almacen
import { Link } from 'react-router-dom'; // Importacion para poder usar un componente de Link
import { removerGasto } from '../acciones/gastos'; // Importador de acciones de gastos para remover

// Componente funcional de opcion
const ListaGastoItem = (props) => (
    <div>
        <Link to={`/editar/${props.currentId}`}>
            <h3>{props.currentDescripcion}</h3>
        </Link>
        <p> El monto del gasto es {props.currentMonto} - Creado en: {props.currentCreadoEn} </p>
        <button 
            onClick = { () => {
                console.log(props.key) // INVESTIGAR PORQUE SALE INDEFINIDO
                props.dispatch(removerGasto({id: props.currentId}));
            }} 
        >
            Eliminar
        </button>
    </div>
);

// Exportacion del componente
export default connect()(ListaGastoItem);
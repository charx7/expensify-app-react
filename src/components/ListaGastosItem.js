// Exportar un componente sin estado funcional
// renderear descripcion monto y creado en
import React from  'react';
import { connect } from 'react-redux'; // Importador de la conexion al almacen
import { Link } from 'react-router-dom'; // Importacion para poder usar un componente de Link
import { removerGasto } from '../acciones/gastos'; // Importador de acciones de gastos para remover
import moment from 'moment'; // Importaciones de moment para formato de fechas
import numeral from 'numeral'; // Importaciones de node_modules para formato de montos

// Componente funcional de opcion
const ListaGastoItem = (props) => (
    <div>
        <Link to={`/editar/${props.currentId}`}>
            <h3>{props.currentDescripcion}</h3>
        </Link>
        <p> 
            El monto del gasto es {numeral(props.currentMonto / 100).format('$0,0.[00]')} - {' '}
            Creado en: {moment(props.currentCreadoEn).format('MMMM Do, YYYY')} 
        </p>
        {/* MARCADO COMO COMENTARIO PORQUE FUE MOVIDO AL COMPONENTE DE EDITAR         
        <button 
            onClick = { () => {
                console.log(props.key) // INVESTIGAR PORQUE SALE INDEFINIDO
                props.dispatch(removerGasto({id: props.currentId}));
            }} 
        >
            Eliminar
        </button>
        */}
    </div>
);

// Exportacion del componente
export default connect()(ListaGastoItem);
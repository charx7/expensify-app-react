// Exportar un componente sin estado funcional
// renderear descripcion monto y creado en
import React from  'react';

// Componente funcional de opcion
const ListaGastoItem = (props) => (
    <div>
        <h3>{props.currentDescripcion}</h3>
        <p> El monto del gasto es {props.currentMonto} = Creado en: {props.currentCreadoEn} </p>
    </div>
);

// Exportacion del componente
export default ListaGastoItem;
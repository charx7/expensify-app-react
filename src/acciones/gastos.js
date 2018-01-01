import uuid from 'uuid'; // Para generar los id
import database from '../firebase/firebase'; // Importamos Firebase
// AQUI VAN LAS ACCIONES QUE TIENE QUE VER CON LOS GASTOS

// Accion de aniadir un gasto con valores de decontruccion default
export const agregarGasto = (gastoAAgregar) => ({
        type: 'AGREGA_GASTO',
        gasto: gastoAAgregar
});

// Codigo que se encarga de hacer push de los datos a Firebase
export const empiezaAgregaGasto = (datosGasto = {}) => {
    return (dispatch) => {
        // Deconstruccion del objeto que se pasara a gasto para aniadir a Firebase
        const {
            descripcion = '',
            nota =  '',
            monto = 0,
            creadoEn = 0
        } = datosGasto;
        // Creamos un objeto de gasto que se pasara a Firebase
        const gasto = {
            descripcion,
            nota,
            monto,
            creadoEn
        };
        // Hacemos un push a Firebase
        return database.ref('gastos').push(gasto).then((ref) => {
            // con los datos cambiados desde firebase si exitoso entonces cambiamos el estado del STORE almacen de Redux
            dispatch(agregarGasto({
                // Jala el id generado por Firebase
                id: ref.key,
                // Agregamos todos los demas elementos del objeto pasado a firebase
                ...gasto
            }));
        });
    };
};

// Accion Remover un gasto
export const removerGasto = ({ id: idQuitar} = {}) => ({
    type: 'REMOVER_GASTO',
    idQuitar
});

// Accion Editar un gasto
export const editarGasto = (id, actualizaciones) => ({
    type: 'EDITAR_GASTO',
    id,
    actualizaciones
});
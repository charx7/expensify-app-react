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

// Accion que manipula el redux-store
export const setGastos = (gastos) => ({
    type: 'SET_GASTOS',
    gastos
});

// Codigo que se encarga de hacer query a la BDD de firebase y devuelve los datos
export const empiezaSetGastos = () => {
    return (dispatch) => {
        // Hacemo un query a la BDD de FB
        return database.ref('gastos').once('value').then((query) => {
            // Construimos un arreglo vacio con el que se van a ir almacenando los datos de firebase
            const datosQueryGastos = [];
            // Loopeamos a traves de los elementos obtenidos en el query
            query.forEach((elementoHijo) => {
                // Por cada elemento que obtuvimos hacemos un push al arreglo de gastos
                datosQueryGastos.push({
                    // Sacamos el id de firebase
                    id: elementoHijo.key,
                    // los ... hacen referencia todos los elementos anidados del objeto
                    ...elementoHijo.val()
                });
            });
            // Para ver que escupe la consola
            console.log('Los datos del query son: ',datosQueryGastos); 
            // Llamo a la accion que modifica al almacen despues de que se termina el asyc
            dispatch(setGastos(datosQueryGastos));
        });
    }
};
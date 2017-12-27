import {createStore, combineReducers} from 'redux'; // Importaciones de Redux
import uuid from 'uuid'; // Para generar los id
import { escape } from 'querystring';

// Accion de aniadir un gasto con valores de decontruccion default
const agregarGasto = (
    { 
     descripcion = '',
     nota = '',
     monto = 0,
     creadoEn = 0
    } = {} 
    ) => ({
        type: 'AGREGA_GASTO',
        gasto: {
            id: uuid(),
            descripcion,
            nota,
            monto,
            creadoEn //Time Stamp
    }
});

// Accion Remover un gasto
const removerGasto = ({ id: idQuitar} = {}) => ({
    type: 'REMOVER_GASTO',
    idQuitar
});

// Accion Editar un gasto
const editarGasto = (id, actualizaciones) => ({
    type: 'EDITAR_GASTO',
    id,
    actualizaciones
});

// Accion Set filtro de texto
const setFiltroTexto = (textoFiltro = '') => ({
    type: 'SET_FILTRO_TEXTO',
    textoFiltro
});
// Ordenar por fecha
const filtroOrdenarPorFecha = (opcionOrdenar = 'FECHA') => ({
    type: 'ORDENAR_POR_FECHA',
    opcionOrdenar
});
// Ordenar por monto
const filtroOrdenarPorMonto = (opcionOrdenar = 'MONTO') => ({
    type: 'ORDENAR_POR_MONTO',
    opcionOrdenar
});
// Accion para Set fecha Inicial
const filtroFechaInicio = (opcionFechaInicio = undefined) => ({
    type: 'SET_FECHA_INICIAL',
    opcionFechaInicio
});
// Accion para Set fecha final
const filtroFechaFinal = (opcionFechaFinal = undefined) => ({
    type: 'SET_FECHA_FINAL',
    opcionFechaFinal
});

// Reducer de los gastos
// Definimos el estado default del estado
const reductorGastosDefault = [];
// Definimos el reductor como una funcion pura
const reductorGastos = (estado = reductorGastosDefault, accion) => {
    switch (accion.type){
        case 'AGREGA_GASTO':
            return [
                // Otro operador para concatenar de otro manera con ...elementos, elemento a aniadir
                ...estado,
                accion.gasto
            ];
        case 'REMOVER_GASTO':
            // otra syntaxis estado.filter(elemento => elemento.id !== accion.id)   
            return estado.filter(({id}) => {
                return id != accion.idQuitar;
            })
        case 'EDITAR_GASTO':
            // Hace un mapeo a los elemento del arreglo para revisarlos uno por uno hasta encontrar el id
            return estado.map((elemento) => {
                // En caso de que encuentre el id procede a editarlo con el objeto pasado de accion
                if(elemento.id === accion.id) {
                    return {
                        // Toma todas las propiedades del elemento
                        ...elemento,
                        // Hace un overrride a las propiedades con los elementos pasados para editar
                        ...accion.actualizaciones
                    };
                } else {
                    // Regresa el elemento sin cambio alguno XD
                    return elemento;
                }
            });
        default: 
            return estado; 
    }
};

// Reductor de los filtros
// Definimos el estado default del estado del modelo de filtros definido abajo
const reductorFiltrosDefault = {
    texto: '',
    ordenarPor: 'MONTO',
    fechaInicio: undefined,
    fechaFinal: undefined
}
// Definimos la funcion pura del reductor
const reductorFiltros = (estado = reductorFiltrosDefault, accion) => {
    switch (accion.type){
        case 'SET_FILTRO_TEXTO':
            // Esto escupe un nuevo Objeto no modifica el anterior
            return {
                // tomamos todos los valores actuales de estado
                ...estado,
                // Hacemo override a texto
                texto: accion.textoFiltro
            };
        case 'ORDENAR_POR_FECHA':
            return {
                ...estado,
                ordenarPor: accion.opcionOrdenar
            };
        case 'ORDENAR_POR_MONTO':
            return{
                ...estado,
                ordenarPor: accion.opcionOrdenar
            }
        case 'SET_FECHA_INICIAL':
            return{
                ...estado,
                fechaInicio: accion.opcionFechaInicio
            }
        case 'SET_FECHA_FINAL':
            return {
                ...estado,
                fechaFinal: accion.opcionFechaFinal
            }
        default:
            return estado
    }
};

// Timestapms en milisegundos desde midnight 1970


// Obtener los gastos visibles
const obtenerGastosVisibles = (gastos, {texto, ordenarPor, fechaInicio, fechaFinal}) => {
    // Hacemos un llamado al metodo filter de los arreglos para determinar que elementos debemos mostrar
    return gastos.filter((elemento) => {
        const coincidenciaFechaInicio = typeof fechaInicio !== 'number' || elemento.creadoEn >= fechaInicio;
        const coincidenciaFechaFinal  = typeof fechaFinal !== 'number' || elemento.creadoEn <= fechaFinal;
        const coincidenciaTexto = elemento.descripcion.toLowerCase().includes(texto.toLowerCase());
        // Regresa el elemento solo si los 3 elementos coinciden con las condiciones de los filtros
        return coincidenciaFechaFinal && coincidenciaFechaInicio && coincidenciaTexto;
    }).sort((a, b) => {
        // Logica para hacer sort del arreglo desplegado con los filtros
        if(ordenarPor == 'FECHA') {
            // Regresa true = 1 si un elemento es antes que el otro y si no regresa -1
            return a.creadoEn < b.creadoEn ? 1 : -1; 
        }
        // Logica para establecer un sort por monto
        if (ordenarPor == 'MONTO') {
            // Regresa true = 1 si un elemento tiene un monto menor que el otro y si no regresa -1
            return a.monto < b.monto ? 1 : -1;
        }
    });
};

// Creacion del Store(Almacen)
const almacen = createStore(
    // Metodo que combina reductores indivicuales haciendo referencia a los elementos raiz que queremos manejar por separado
    combineReducers({
        // Le asignamos un reductor especifico
        gastos: reductorGastos,
        filtros: reductorFiltros
    })
);


// Crea un servicio de suscripcion para que salga el estado en los logs
almacen.subscribe( () => {
    // Obtenemos los gastos del estado actual del almacen
    const estadoActual = almacen.getState();
    // Llamamos a la funcion para obtener los gastos segun el estado de los filtros actuales
    const gastosVisibles = obtenerGastosVisibles(estadoActual.gastos, estadoActual.filtros);
    console.log(gastosVisibles);
});

// Agregamos una serie de gastos ejemplo .displatch crea un objeto de accion
const gastoUno = almacen.dispatch(agregarGasto({
    descripcion: 'Renta',
    monto: 100,
    creadoEn: -21000
}));

const gastoDos = almacen.dispatch(agregarGasto({
    descripcion: 'Cafe',
    monto: 500,
    creadoEn: -1000
}));

// // Para crear un objeto de accion que remueve un gasto
// almacen.dispatch(removerGasto( {id: gastoDos.gasto.id} ));

// // Crea un objeto de accion que edita un gasto en especifico el gastoUno
// almacen.dispatch(editarGasto( gastoUno.gasto.id, {monto: 1000} ));

// Llama y cre un elemento de Accion para que se modifique el filtro de texto 
// almacen.dispatch(setFiltroTexto('renta'));
// almacen.dispatch(setFiltroTexto());

// // Para cambiar los parametros del filtro sort
// almacen.dispatch(filtroOrdenarPorFecha());
// almacen.dispatch(filtroOrdenarPorMonto());

// Llamado a las acciones de cambiar fecha inicio y final default es undefined
// almacen.dispatch(filtroFechaInicio(0));
// almacen.dispatch(filtroFechaInicio());
// almacen.dispatch(filtroFechaFinal(999));

// Datos demo DUMMY MODELO del estado
const demoState = {
    gastos: [{
            id: 'holisoyunid',
            descripcion: 'Renta de enero',
            nota: 'Esto fue un pago de enero',
            monto: 54500,
            creadoEn: 0 //Time Stamp
        }],
    filtros: {
        texto: 'renta',
        ordenarPor: 'monto', // Fecha o Monto
        fechaInicio: undefined,
        fechaFInal: undefined
    }
};
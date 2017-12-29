import moment from 'moment'; // Importacion de moment
// Se encarga de saber cuales registros a mostrar asi como de filtrar y ordenars
// Timestapms en milisegundos desde midnight 1970

// Obtener los gastos visibles
const obtenerGastosVisibles = (gastos, {texto, ordenarPor, fechaInicio, fechaFinal}) => {
    // Hacemos un llamado al metodo filter de los arreglos para determinar que elementos debemos mostrar
    return gastos.filter((elemento) => {
        // Creamos un momento para hacer las comparaciones de lo que se filtrara del elemento
        const creadoEnMomento = moment(elemento.creadoEn);
        const coincidenciaFechaInicio = fechaInicio ? fechaInicio.isSameOrBefore(creadoEnMomento, 'day') : true;
        // Forma vieja del codigo de arriba: typeof fechaInicio !== 'number' || elemento.creadoEn >= fechaInicio;
        const coincidenciaFechaFinal  = fechaFinal ? fechaFinal.isSameOrAfter(creadoEnMomento, 'day'): true;
        // Forma vieja del codigo de arriba: typeof fechaFinal !== 'number' || elemento.creadoEn <= fechaFinal;
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
// Exportaciones de la funcion de mostrar y sort
export default obtenerGastosVisibles;
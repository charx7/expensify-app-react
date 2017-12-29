import moment from  'moment'; // Importaciones de la libreria de moment

// Reductor de los filtros
// Definimos el estado default del estado del modelo de filtros definido abajo
const reductorFiltrosDefault = {
    texto: '',
    ordenarPor: 'FECHA',
    fechaInicio: moment().startOf('month'),
    fechaFinal: moment().endOf('month')
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
// Exportaciones del reductor
export default reductorFiltros;
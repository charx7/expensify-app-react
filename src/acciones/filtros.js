// AQUI ESTAN LAS ACCIONES QUE TIENE QUE VER CON EL FILTRO
// Accion Set filtro de texto
export const setFiltroTexto = (textoFiltro = '') => ({
    type: 'SET_FILTRO_TEXTO',
    textoFiltro
});
// Ordenar por fecha
export const filtroOrdenarPorFecha = (opcionOrdenar = 'FECHA') => ({
    type: 'ORDENAR_POR_FECHA',
    opcionOrdenar
});
// Ordenar por monto
export const filtroOrdenarPorMonto = (opcionOrdenar = 'MONTO') => ({
    type: 'ORDENAR_POR_MONTO',
    opcionOrdenar
});
// Accion para Set fecha Inicial
export const filtroFechaInicio = (opcionFechaInicio = undefined) => ({
    type: 'SET_FECHA_INICIAL',
    opcionFechaInicio
});
// Accion para Set fecha final
export const filtroFechaFinal = (opcionFechaFinal = undefined) => ({
    type: 'SET_FECHA_FINAL',
    opcionFechaFinal
});

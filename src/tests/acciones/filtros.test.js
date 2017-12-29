// Importamos las acciones que vamos a testear
import { filtroFechaInicio,
         filtroFechaFinal,
         setFiltroTexto,
         filtroOrdenarPorFecha,
         filtroOrdenarPorMonto } from '../../acciones/filtros';
// Importamos momento
import moment from 'moment';

test('Deberia generar un objeto con la fecha inicial', () => {
    const accion = filtroFechaInicio(moment(0));
    expect(accion).toEqual({
        type: 'SET_FECHA_INICIAL',
        opcionFechaInicio: moment(0)
    });
});

test('Deberia generar un objeto con la fecha Final', () => {
    const accion = filtroFechaFinal(moment(0));
    // Text
    expect(accion).toEqual({
        type: 'SET_FECHA_FINAL',
        opcionFechaFinal: moment(0)
    });
});

// Testeo para el filtro de texto
test('Deberia setear el filtro de texto con el valor pasado', () => {
    const accion = setFiltroTexto('Texto generico a filtrar');

    expect(accion).toEqual({
        type: 'SET_FILTRO_TEXTO',
        textoFiltro: 'Texto generico a filtrar'
    });
});

// Ahora va el caso con default para que pase en blaco
test('Deberia setear el filtro de texto con el valor pasado', () => {
    const accion = setFiltroTexto();
    // Test
    expect(accion).toEqual({
        type: 'SET_FILTRO_TEXTO',
        textoFiltro: ''
    });
});

// Testeo para los set de como ordenar
test('Deberia de hacer set al filtro de ordenar y ponerlo como Monto', () => {
    // Llamado a la funcion y store del resultado
    const accion = filtroOrdenarPorMonto();
    // Text 
    expect(accion).toEqual({
        type: 'ORDENAR_POR_MONTO',
        opcionOrdenar: 'MONTO'
    });
});

// Testeo para los set de como ordenar
test('Deberia de hacer set al filtro de ordenar y ponerlo como Fecha', () => {
    // Llamado a la funcion y store del resultado
    const accion = filtroOrdenarPorFecha();
    // Text 
    expect(accion).toEqual({
        type: 'ORDENAR_POR_FECHA',
        opcionOrdenar: 'FECHA'
    });
});
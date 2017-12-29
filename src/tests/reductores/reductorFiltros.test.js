import reductorFiltros from '../../reductores/reductorFiltros'; // Importacion de los modulos de testeo
import moment from 'moment'; // Importaciones de momeento

test('Deberia de establecer como default los valores de filtros', () =>{
    // Llamamos a la inicializacion de los reductores con la accion especial del type: '@@INIT' de Redux
    const estado = reductorFiltros(undefined, { type: '@@INIT' });
    expect(estado).toEqual({
        texto: '',
        ordenarPor: 'FECHA',
        fechaInicio: moment().startOf('month'),
        fechaFinal: moment().endOf('month')
    });
});
// Otro test
test('Deberia establecer ordenarPor como MONTO', () => {
    const estado = reductorFiltros(undefined, { type: 'ORDENAR_POR_MONTO', opcionOrdenar: 'MONTO' });
    expect(estado.ordenarPor).toEqual('MONTO');
});
// Otro test
test('Deberia establecer ordenarPor como FECHA', () => {
    // Definimos nuestro propio estado para probar si cambia
    const estadoDefault = {
        texto: '',
        fechaInicio: undefined,
        fechaFinal: undefined,
        ordenarPor: 'MONTO'
    }
    const estado = reductorFiltros(undefined, { type: 'ORDENAR_POR_FECHA', opcionOrdenar: 'FECHA' });
    expect(estado.ordenarPor).toEqual('FECHA');
});
// Caso para setear el filtro de texto
test('Deberia establecer el filtro de texto', () => {
    const estado = reductorFiltros(undefined, { type: 'SET_FILTRO_TEXTO', textoFiltro: 'Texto generico' });
    expect(estado.texto).toEqual('Texto generico');
});
// Deberia setear el start date
test('Deberia establecer el filtro de fecha Inicial', () => {
    const estado = reductorFiltros(undefined, { type: 'SET_FECHA_INICIAL', opcionFechaInicio: moment(0) });
    expect(estado.fechaInicio).toEqual(moment(0));
});
// Deberia setear el end date
test('Deberia establecer el filtro de fecha final', () => {
    const estado = reductorFiltros(undefined, { type: 'SET_FECHA_FINAL', opcionFechaFinal: moment(0) });
    expect(estado.fechaFinal).toEqual(moment(0));
});
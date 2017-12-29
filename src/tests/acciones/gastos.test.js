// Importamos las funciones que queremos testear
import { agregarGasto, removerGasto, editarGasto } from '../../acciones/gastos';

test('Deberia preparar el objeto de gasto a remover ', () => {
    const accion = removerGasto({ id: 'abc123' });
    // Compara el objeto de resultado con el esperado usando el metodo .toEqual
    expect(accion).toEqual({
        type: 'REMOVER_GASTO',
        idQuitar: 'abc123'
    });
});

// Test para la accion de editar Gasto
test('Deberia preparar el objeto de gasto a editar', () => {
    // Llamado de la accion/funcion
    const accion = editarGasto( 'abc123', {nota: 'Nuevo Valor de Nota'},);
    // Comparacion de resultado
    expect(accion).toEqual({ 
        type: 'EDITAR_GASTO',
        id: 'abc123',
        actualizaciones: {
            nota: 'Nuevo Valor de Nota'
        }
    });
});

// Test para la accion de agregar gasto
test('Deberia preparar el objeto de Aniadir gasto con valores aniadidos', () => {
    // Definimos el objeto que se le va a pasar
    const datoNuevoGasto = {
        descripcion: 'descripcion generica',
        monto: 123,
        creadoEn: 1000,
        nota: 'nota generica'
    }
    // Llamamos a la accin de aniadir gasto
    const accion = agregarGasto(datoNuevoGasto);
    // Testeamos el objeto recibido
    expect(accion).toEqual({
        type: 'AGREGA_GASTO',
        gasto: {
            // Hace que esperemos un id cualquiera del tipo string
            id: expect.any(String),
            descripcion: 'descripcion generica',
            nota: 'nota generica',
            monto: 123,
            creadoEn: 1000
        }
    });
});

// Test para valores de default de la accion aniadir gasto
test('Deberia de preparar las acciones de aniade gasto con valores de default', () => {
    // Definimos el objeto a pasar
    const datoNuevoGastoVacio = {}
    // Llamado a la funcion
    const accion = agregarGasto(datoNuevoGastoVacio);
    // Asumciones
    expect(accion).toEqual({
        type: 'AGREGA_GASTO',
        gasto: {
            id: expect.any(String),
            descripcion: '',
            nota: '',
            monto: 0,
            creadoEn: 0
        }
    });
});
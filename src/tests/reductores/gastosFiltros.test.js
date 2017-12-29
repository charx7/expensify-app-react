import reductorGastos from '../../reductores/reductorGastos'; // Importacion de los modulos de testeo

// Testeo del estado default para ser []
test('Deberia de establecer como default un arreglo vacio', () =>{
    // Llamamos a la inicializacion de los reductores con la accion especial del type: '@@INIT' de Redux
    const estado = reductorGastos(undefined, { type: '@@INIT' });
    expect(estado).toEqual([]);
});


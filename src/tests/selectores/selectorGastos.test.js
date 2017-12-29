// Importamos la libreria que vamos a testear
import obtenerGastosVisibles from '../../selectores/selectorGastos';
import moment from  'moment'; // Importaciones de momento

const datosTesteoGastos = [{
        id: '1',
        descripcion: 'Gum',
        nota: '',
        monto: 195,
        creadoEn: 0 
    }, {
        id: '2',
        descripcion: 'Renta',
        nota: '',
        monto: 1000,
        creadoEn: moment(0).subtract(4,'days').valueOf() 
    }, {
        id: '3',
        descripcion: 'Credit Card',
        nota: '',
        monto: 4500,
        creadoEn: moment(0).add(4,'days').valueOf()
    }]

// Empezamos el primer test
test('Deberia filtar por valor de texto', () =>{
    // Definimos los filtros a usar por el testeo
    const filtros = {
        texto: 'e',
        ordenarPor: 'FECHA',
        fechaInicio: undefined,
        fechaFinal: undefined
    };
    // Llamamos a la accion de filtro
    const resultado = obtenerGastosVisibles(datosTesteoGastos, filtros);
    // Definimos lo que esperamos obtener de la funcion a testear
    expect(resultado).toEqual([ datosTesteoGastos[2], datosTesteoGastos[1] ]);
}); 

// Testeo de filtrar por start date
test('Deberia de filtrar por fecha inicial', () => {
    // Definimos los filtros a usar por el testeo
    const filtros = {
        texto: '',
        ordenarPor: 'FECHA',
        fechaInicio: moment(0),
        fechaFinal: undefined
    };
    // Llamamos a la accion de filtro
    const resultado = obtenerGastosVisibles(datosTesteoGastos, filtros);
    // Definimos lo que esperamos obtener de la funcion a testear
    expect(resultado).toEqual([ datosTesteoGastos[2], datosTesteoGastos[0] ]);
});

// Escribimos el testeo que deberia de filtrar por fecha final
test('Deberia de filtrar por fecha final', () => {
    // Definimos los filtros a usar por el testeo
    const filtros = {
        texto: '',
        ordenarPor: 'FECHA',
        fechaInicio: undefined,
        fechaFinal: moment(0)
    };
    // Llamamos a la accion de filtro
    const resultado = obtenerGastosVisibles(datosTesteoGastos, filtros);
    // Definimos lo que esperamos obtener de la funcion a testear
    expect(resultado).toEqual([ datosTesteoGastos[0], datosTesteoGastos[1] ]);
});

// Escribimos el caso de testeo que deberia ordenar por fecha
test('Deberia ordenar por fecha', () =>{
    // Definimos los filtros a usar por el testeo
    const filtros = {
        texto: '',
        ordenarPor: 'FECHA',
        fechaInicio: undefined,
        fechaFinal: undefined
    };
    // Llamamos a la accion de filtro
    const resultado = obtenerGastosVisibles(datosTesteoGastos, filtros);
    // Definimos lo que esperamos obtener de la funcion a testear
    expect(resultado).toEqual([ datosTesteoGastos[2], datosTesteoGastos[0], datosTesteoGastos[1] ]);
}); 

// Escribimos el caso de testeo que deberia ordenar por monto
test('Deberia ordenar por monto', () =>{
    // Definimos los filtros a usar por el testeo
    const filtros = {
        texto: '',
        ordenarPor: 'MONTO',
        fechaInicio: undefined,
        fechaFinal: undefined
    };
    // Llamamos a la accion de filtro
    const resultado = obtenerGastosVisibles(datosTesteoGastos, filtros);
    // Definimos lo que esperamos obtener de la funcion a testear
    expect(resultado).toEqual([ datosTesteoGastos[2], datosTesteoGastos[1], datosTesteoGastos[0] ]);
});
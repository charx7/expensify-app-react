import sumaGastos from  '../../selectores/gastosTotales'; // Importamos la funcion a testear
import moment from  'moment'; // Importamos moment

// Datos fake con los que vamos a trabajar
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

const datosTesteoGastosVacio = [];

const datosTesteoGastosUnElemento = [{
    id: '2',
    descripcion: 'Gum',
    nota: '',
    monto: 195,
    creadoEn: 0
}]
// Empezamos el primer test
test('Deberia de arrojar la suma de los gastos que se le pasan', () => {
    // Llamado a la funcion
    const resultado = sumaGastos(datosTesteoGastos);
    // Lo que deberia de arrojar
    expect(resultado).toEqual(5695);
});

// Otro test que deberia de pasar la funcion si no hay gastos a pasar aka arreglo vacio
test('Deberia de arrojar 0 como resultado cuando no hay gastos a sumar', () => {
    // Llamado a la funcion
    const resultado = sumaGastos(datosTesteoGastosVacio);
    // Esperamos que arroje 0
    expect(resultado).toEqual(0);
});

// Test de un solo elemento
test('Deberia de arrojar el monto solito cuando hay un solo elemento en el arreglo', () => {
    // Llamado a la funcion
    const resultado = sumaGastos(datosTesteoGastosUnElemento);
    // Esperamos que arroje 0
    expect(resultado).toEqual(195);
});
// Importamos las funciones que queremos testear
import { agregarGasto, 
        removerGasto, 
        editarGasto, 
        empiezaAgregaGasto, 
        setGastos,
        empiezaSetGastos, 
        empiezaRemoverGasto } from '../../acciones/gastos';
import thunk from 'redux-thunk'; // Importaciones del middleware de redux
import configureMockStore from 'redux-mock-store'; // Importaciones de modulos de testeo para redux
import database from '../../firebase/firebase'; // Importamos el modulo de firebase para hacer un query
import gastosDummy from '../fixtures/expenses'; // Importacion de los gastos dummy para uso de los test

// Creamos el mock store (almacen) para testeo
const creaAlmacenMock = configureMockStore([thunk]);

// Pedazo de codigo que corre antes de cualquier test, usamos done para que espere a que termine el asaync task
beforeEach((done) => {
    // Creamo un objeto vacio
    const datosGastosDummy = {};
    // Hacemos un forEach para convertirlos NOTA: La variable de gastosDummy es la que contiene los gastos dummy para testeo
    gastosDummy.forEach(({ id, descripcion, nota, monto, creadoEn}) => {
        // Le asignamos un id al objeto basandonos en los datos recibido
        datosGastosDummy[id] = {descripcion, nota, monto, creadoEn};
    });
    // Hacemos llamado al async task
    database.ref('gastos').set(datosGastosDummy).then(() => done());
});

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
        gasto: datoNuevoGasto
    });
});

// Done espera a que las funciones async se completen pasa determinar si paso el test o no
test('Deberia agregar gasto a la BDD y al almacen', (done) => {
    // Crea una instancia del almacen de testeo
    const almacenTest = creaAlmacenMock({});
    // Datos dummy
    const datosGastoDummy = {
        descripcion: 'Raton',
        monto: '3000',
        nota: 'un lindo latoncito',
        creadoEn: 1000
    };
    // Async test call
    almacenTest.dispatch(empiezaAgregaGasto(datosGastoDummy)).then(() => {
        // Llamamos a las acciones del test
        const acciones = almacenTest.getActions();
        // Hacemos una asumcion de lo que esperamos ie, que se pasaran bien los argumentos
        expect(acciones[0]).toEqual({
            type: 'AGREGA_GASTO',
            gasto: {
                id: expect.any(String),
                ...datosGastoDummy
            }
        });
        // Testeamos si en verdad se salvaron los datos a la BDD de firebase
        return database.ref(`gastos/${acciones[0].gasto.id}`).once('value');
        }).then((snapshot) => {
            // Indicamos que esperamos una vez que corra esta promesa
            expect(snapshot.val()).toEqual(datosGastoDummy);    
            // Indica que espere a que se complete la async function
            done();
    });
});

test('Deberia hacer setup al hacer set gastos acciones de objeto con dato', () => {
    // Llamamos a la accion a testear
    const accion = setGastos(gastosDummy);
    // Lo que esperamos recibir de esa accion
    expect(accion).toEqual({
        type: 'SET_GASTOS',
        gastos: gastosDummy
    });
});

test('Deberia de obtener los datos de gastos de firebase', (done) => {
    // Creamos una instacia del almacen dummy
    const almacen = creaAlmacenMock({});
    // Llamamos a la accion
    almacen.dispatch(empiezaSetGastos()).then(() => {
        const acciones = almacen.getActions();
        console.log('valor recibido: ', acciones[0]);
        console.log('valor que esperamos: ', gastosDummy)
        expect(acciones[0]).toEqual({
            type: 'SET_GASTOS',
            // Debe ser igual a los gastos dummy definimos arriba
            gastos: [...gastosDummy]
        });
        // Para que espere al resultado del async task
        done(); 
    });

});

test('Deberia remover un elemento de gasto de firebase', (done) => {
    // Crea un almacen mock
    const almacen = creaAlmacenMock({});
    const id = gastosDummy[2].id
    // Llamamos la async task y le pasamos el objeto con id de arriba
    almacen.dispatch(empiezaRemoverGasto({ id })).then(() => {
        const acciones = almacen.getActions();
        expect(acciones[0]).toEqual({
            type: 'REMOVER_GASTO',
            idQuitar: id
        });
        return database.ref(`gastos/${id}`).once('value');
    }).then( (snapshot) => {
        // Esperamos que el valor de id que quitamos sea falso porque ya no esta en la BDD
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

// Hace falta hacer un default en el que se pasa un objeto vacio para verificar si corren los objetos vacios

// // Test para valores de default de la accion aniadir gasto
// test('Deberia de preparar las acciones de aniade gasto con valores de default', () => {
//     // Definimos el objeto a pasar
//     const datoNuevoGastoVacio = {}
//     // Llamado a la funcion
//     const accion = agregarGasto(datoNuevoGastoVacio);
//     // Asumciones
//     expect(accion).toEqual({
//         type: 'AGREGA_GASTO',
//         gasto: {
//             id: expect.any(String),
//             descripcion: '',
//             nota: '',
//             monto: 0,
//             creadoEn: 0
//         }
//     });
// });
import {createStore} from 'redux';

// Generadores de Accion - funcion que retorna objetos de accion
const incrementoContador = ({ incrementoPor = 1 } = {}) => ({
    type: 'INCREMENTO',
    incrementoPor
    //incrementoPor: typeof incrementoPor === 'number' ? incrementoPor : 1
});

// Generador de decremento
const decrementoContador = ({ decrementoPor = 1} = {} ) => ({
    type: 'DECREMENTO',
    decrementoPor
});

// Generador de Reset
const resetearContador = () => ({
    type: 'RESETEAR'
});

// Generador de Set
const setContador = ({ setContador :valorSet} = {}) => ({
    type: 'SET',
    valorSet
});

// Creamos el almacen de estados
const store = createStore((estado = {contador: 0}, accion) => {
    console.log('corriendo');
    switch (accion.type) {
        case 'INCREMENTO':  
            return {
                contador: estado.contador + accion.incrementoPor
            };
        case 'DECREMENTO':
            return {
                contador: estado.contador - accion.decrementoPor
            };
        case 'SET':
            return {
                contador: accion.valorSet
            };
        case 'RESETEAR': 
            return {
                contador: 0
            };
        default:
            return estado;
    }
});

// controlamos las veces que aparece con unsubscribe
const unsubscribe = store.subscribe(() => {
    // Escupe a la consola el estado del almacen cada vez que cambia
    console.log(store.getState());
});

// Accion incrementar el contador se tiene que llamar al metodo .dispatch del almacen

// store.dispatch({
//     type: 'INCREMENTO',
//     incrementoPor: 5
// });
store.dispatch(incrementoContador({ incrementoPor: 5 }));

store.dispatch(incrementoContador());

// Accion para resetear el contador
store.dispatch(resetearContador());

// Accion para reducir el estado del almacen
store.dispatch(decrementoContador());

store.dispatch(decrementoContador({ decrementoPor : 10 }));

// Para set a un valor fijo
store.dispatch(setContador({setContador: 101}));

// Para ya no desplegar los cambios del almacen
unsubscribe();
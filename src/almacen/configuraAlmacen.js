import {createStore, combineReducers, applyMiddleware, compose} from 'redux'; // Importaciones de Redux
// Importamos los reductores necesarios que queremos combinar y usar para crear el almacen
import reductorGastos from '../reductores/reductorGastos';
import reductorFiltros from '../reductores/reductorFiltros';
import thunk from 'redux-thunk'; // Importacion para el middleware de thunk

// Linea para configurar el almacen con las devtools y el middleware
const componerMejoras = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// Funcion que vamos a exportar
export default () => {
    // Creacion del Store(Almacen)
    const almacen = createStore(
        // Metodo que combina reductores indivicuales haciendo referencia a los elementos raiz que queremos manejar por separado
        combineReducers({
            // Le asignamos un reductor especifico
            gastos: reductorGastos,
            filtros: reductorFiltros
        }),
        // Para utilizar el middleware
        componerMejoras(applyMiddleware(thunk))
        // ANTIGUO Linea para configurar las Redux Dev tools
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    // Para definir que vamos a exportar nuestro Store(almacen)
    return almacen;
};
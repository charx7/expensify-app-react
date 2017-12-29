import {createStore, combineReducers} from 'redux'; // Importaciones de Redux
// Importamos los reductores necesarios que queremos combinar y usar para crear el almacen
import reductorGastos from '../reductores/reductorGastos';
import reductorFiltros from '../reductores/reductorFiltros';

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
        // Linea para configurar las Redux Dev tools
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    // Para definir que vamos a exportar nuestro Store(almacen)
    return almacen;
};
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
        })
    );

    // Para definir que vamos a exportar nuestro Store(almacen)
    return almacen;
};
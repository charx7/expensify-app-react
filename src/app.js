// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss'; // Importacion de los archivos de CSS
import 'normalize.css/normalize.css'; // Reseteo de los estilos de CSS con la nueva libreria 
import AppRouter from './routers/AppRouter';
import configuraAlmacen from './almacen/configuraAlmacen'; // Importacion del Almacen REDUX y su modelo con reducers
import { agregarGasto } from './acciones/gastos'; // Importaciones de acciones de gastos
import { setFiltroTexto } from './acciones/filtros';
import obtenerGastosVisibles from './selectores/selectorGastos'; // Importacion de la funcion que muestra los gastos visibles

// acceso al modelo del almacen con REDUX
const almacen = configuraAlmacen();

// Agregar dos Gastos
// Agregamos una serie de gastos ejemplo .displatch crea un objeto de accion
const gastoUno = almacen.dispatch(agregarGasto({ descripcion: 'Water bill', monto: 100, creadoEn: -21000 }));
const gastoDos = almacen.dispatch(agregarGasto({ descripcion: 'Gas bill', monto: 200, creadoEn: -21000 }));
almacen.dispatch(setFiltroTexto('bill'));
// Verificamos el estado en la consola despues de los dispatches
console.log(almacen.getState());

// Para obtener el estado acual del almacen
const estado = almacen.getState();
// Para desplegar los gastos visibles segun los criterios de filtros
const gastosVisibles = obtenerGastosVisibles(estado.gastos, estado.filtros);
console.log(gastosVisibles);

const jsx  = (
    /* Usamos el componente de Provider de React-Redux para pasarle el almacen a todos nuestros componentes como prop */
    <Provider store={almacen} >
        <AppRouter />
    </Provider>
);

// Rendereo de toda la aplicacion usando el componente padre IndecisionApp
ReactDOM.render(jsx, document.getElementById('app'));
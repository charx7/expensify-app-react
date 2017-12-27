// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'; // Importacion de los archivos de CSS
import 'normalize.css/normalize.css'; // Reseteo de los estilos de CSS con la nueva libreria 
import AppRouter from './routers/AppRouter';
import configuraAlmacen from './almacen/configuraAlmacen'; // Importacion del Almacen REDUX y su modelo con reducers

// acceso al modelo del almacen con REDUX
const almacen = configuraAlmacen();

console.log(almacen.getState());

// Agregar dos Gastos
// Usar una accion de filtros para texto de descripcion bill
// Usar la funcion de mostrar gastos visibles 

// Rendereo de toda la aplicacion usando el componente padre IndecisionApp
ReactDOM.render(<AppRouter />, document.getElementById('app'));
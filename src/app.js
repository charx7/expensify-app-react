// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'; // Importacion de los archivos de CSS
import 'normalize.css/normalize.css'; // Reseteo de los estilos de CSS con la nueva libreria 
import AppRouter from './routers/AppRouter';

// Rendereo de toda la aplicacion usando el componente padre IndecisionApp
ReactDOM.render(<AppRouter />, document.getElementById('app'));
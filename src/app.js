// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
//import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss'; // Importacion de los archivos de CSS
import 'normalize.css/normalize.css'; // Reseteo de los estilos de CSS con la nueva libreria 
import {BrowserRouter, Route} from 'react-router-dom'; // Importaciones Necesarias para establecer el routeo

// Prueba
const template = () => (
    <div>HOla k ase</div>
);

// Prueba
const Dummy = () => (
    <div>aniade expense</div>
);

// Prueba
const Dummy2 = () => (
    <div>agregars</div>
);

// Prueba
const Dummy3 = () => (
    <div>aiuda</div>
);

// Definimos las rutas basicas
const rutas = (
    <BrowserRouter>
        <div>
            <Route path = '/' component = {template} exact = {true}/>
            <Route path= "/crear" component ={Dummy}/>
            {/* Ruta de editar gasto*/}
            <Route path= "/editar" component ={Dummy2}/>
            {/* Ruta de aiuda*/}
            <Route path= "/ayuda" component ={Dummy3}/>
        </div>    
    </BrowserRouter>
);

// Rendereo de toda la aplicacion usando el componente padre IndecisionApp
ReactDOM.render(rutas, document.getElementById('app'));
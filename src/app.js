// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
//import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss'; // Importacion de los archivos de CSS
import 'normalize.css/normalize.css'; // Reseteo de los estilos de CSS con la nueva libreria 
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; // Importaciones Necesarias para establecer el routeo

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

// Prueba
const NoEncontrado = () => (
    <div>
        404 No Encontrado - 
        <Link to = "/">
             HOME
        </Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <NavLink to = "/" activeClassName = "esta-activo" exact={true}>
            DASHBOARD
        </NavLink>
        <NavLink to = "/crear" activeClassName = "esta-activo">
            Crear
        </NavLink>
        <NavLink to = "/editar" activeClassName = "esta-activo">
            Editar
        </NavLink>
        <NavLink to = "/ayuda" activeClassName = "esta-activo">
            Ayuda
        </NavLink>
    </header>
);

// Definimos las rutas basicas
const rutas = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path = '/' component = {template} exact = {true}/>
                <Route path= "/crear" component ={Dummy}/>
                {/* Ruta de editar gasto*/}
                <Route path= "/editar" component ={Dummy2}/>
                {/* Ruta de aiuda*/}
                <Route path= "/ayuda" component ={Dummy3}/>
                {/* Ruta para 404*/}
                <Route component ={NoEncontrado}/>
            </Switch>    
        </div>
    </BrowserRouter>
);

// Rendereo de toda la aplicacion usando el componente padre IndecisionApp
ReactDOM.render(rutas, document.getElementById('app'));
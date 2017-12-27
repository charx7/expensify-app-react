// Importaciones de React
import React from 'react';
import ReactDOM from 'react-dom';
// Importaciones de Ruteo
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'; // Importaciones Necesarias para establecer el routeo
// Importaciones de los componentes indivicuales
import GastoDashboardPagina from '../components/GastoDashboardPagina';
import CrearGastoPagina from '../components/CrearGastoPagina';
import EditarGastoPagina from '../components/EditarGastoPagina';
import AyudaPagina from '../components/AyudaPagina';
import NoEncontradoPagina from '../components/NoEncontradoPagina';
import Header from '../components/Header';

// Componente que hace que se carguen las Rutas
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path = '/' component = {GastoDashboardPagina} exact = {true}/>
                <Route path= "/crear" component ={CrearGastoPagina}/>
                {/* Ruta de editar gasto*/}
                <Route path= "/editar" component ={EditarGastoPagina}/>
                {/* Ruta de aiuda*/}
                <Route path= "/ayuda" component ={AyudaPagina}/>
                {/* Ruta para 404*/}
                <Route component ={NoEncontradoPagina}/>
            </Switch>    
        </div>
    </BrowserRouter>
);

export default AppRouter;
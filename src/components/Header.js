import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        
        <NavLink to = "/" activeClassName = "esta-activo" exact={true}>
            DASHBOARD
        </NavLink>

        <NavLink to = "/crear" activeClassName = "esta-activo">
            Crear
        </NavLink>

        <NavLink to = "/ayuda" activeClassName = "esta-activo">
            Ayuda
        </NavLink>
    </header>
);

export default Header;
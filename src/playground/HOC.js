// Higher order components (HOC) - Un componente que renderea otro componente
import React from  'react';
import ReactDOM from 'react-dom';

// Componente
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>La info es: {props.info}</p>
    </div>
);

// Otro componente para el ejercicio
const Info2 = (props) => (
    <div>
        <h1>Info Secreta</h1>
        <p>La info es: {props.estaAutenticado ? props.info : 'No esta autenticado'}</p>
    </div>
);


// Primer High order component para reusar codigo 
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Esta es informacion privada eres un admin</p> }
            {/* Instancia del componente al que se le va a pasar el Header se pasa como prop
             lo .. son para pasar los props*/}
            <WrappedComponent {...props}/>
        </div>
    );
};

// Requerir autenticacion otro high order component
const requiereAutenticacion = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>Generico</p>
            <WrappedComponent {...props}/>
        </div>
    );
};


// Le pasa el componente de Info a otro que tiene un warning (el componente se usa como prop!)
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiereAutenticacion(Info2);

// Rendereo
//ReactDOM.render(<AdminInfo isAdmin={true} info='Esto son los detalles'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo estaAutenticado={false} info='Esta autenticado XD info secreta'/>, document.getElementById('app'));
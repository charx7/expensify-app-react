import React from 'react'; // Importacion de React
import { shallow } from 'enzyme'; // Libreria de enzyme para testear componentes de react
import { DesplegadoSumaGastos } from '../../components/DesplegadoSumaGastos'; // Importamos el componente de React a testear
import moment from 'moment';

const gastosPrueba1 = [{
    id: '1',
    descripcion: 'Gum',
    nota: '',
    monto: 195,
    creadoEn: 0
}]

const gastosPrueba2 = [{
    id: '1',
    descripcion: 'Gum',
    nota: '',
    monto: 195,
    creadoEn: 0 
}, {
    id: '2',
    descripcion: 'Renta',
    nota: '',
    monto: 1000,
    creadoEn: moment(0).subtract(4,'days').valueOf() 
}]

test('Deberia renderear bien el componente con un gasto vacio', () =>{
    // Lo que se va renderear al usuario
    const wrapper = shallow(<DesplegadoSumaGastos gastosVisibles = {[]}/>);
    // lo que esperamos del resultado que coincida con el snapshot
    expect(wrapper).toMatchSnapshot();
});

test('Deberia renderear bien el componente con un gasto', () =>{
    // Lo que se va renderear al usuario
    const wrapper = shallow(<DesplegadoSumaGastos gastosVisibles = {gastosPrueba2}/>);
    // lo que esperamos del resultado que coincida con el snapshot
    expect(wrapper).toMatchSnapshot();
});


// Para que sirva la libreria de enzyme con react 16
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv'; // Para jalar las variables de ambiente en caso de los tests

DotEnv.config({ path: '.env.test' });

Enzyme.configure({
    adapter: new Adapter()
});
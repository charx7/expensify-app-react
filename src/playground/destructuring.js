console.log('holi');
const persona = {
    edad: 25,
    donde: {
        ciudad: 'Puebla',
        temperatura: 92
    }
};

// Destructuracion de ES6 jalamos las propiedades del objeto persona y las guardamos en nombre, edad
const {nombre = 'Anonimo', edad} = persona;
const {ciudad: city, temperatura: temp} = persona.donde;

console.log(`Me llamo: ${nombre}`);
console.log(`${city} esta con temperatura ${temp}.`);

// Array DESTRUCTURING

const address = ['1229 S Juniper street', 'pensilvania'];

const [direccion, ciudad, CP = 'no hay XD'] = address;

console.log(`Vivo en ${direccion} en el estado de ${ciudad} codigo postal ${CP}`);
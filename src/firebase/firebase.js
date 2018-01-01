// Importamos todos los named exports de firebase
import * as firebase from 'firebase';

// Codigo para que sirva Firebase
const  config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID 
};

// Inicializamos la conexion
firebase.initializeApp(config);

// Para guardar objetos como arreglo por medio de objetos porque firebase no soporta arreglos
const database =  firebase.database();

// Exportaciones
export { firebase, database as default};

// // Suscripcion a hijo quitado
// database.ref('gastos').on('child_removed', (query) => {
//     console.log(query.key, query.val());
// });

// // Suscripcion a hijo Modificado
// database.ref('gastos').on('child_changed', (query) => {
//     console.log(query.key, query.val());
// });

// // Suscripcion a hijo Aniadido corre una vez por default por cada registro que ya exista en la BDD
// database.ref('gastos').on('child_added', (query) => {
//     console.log(query.key, query.val());
// });

// // database.ref('gastos').push({
// //     descripcion: 'Agua',
// //     nota: '',
// //     monto: 1000,
// //     creadoEn: 9999
// // });

// // Para hacer query en forma de suscripcion hace requery a la BDD cada vez que cambian los datos
// // database.ref('gastos').on('value', (query) => {
// //     const gastos = [];
// //     query.forEach((elementoHijo) => {
// //         gastos.push({
// //             id: elementoHijo.key,
// //             ...elementoHijo.val()
// //         })
// //     });
// //     console.log(gastos);
// // });

// // Para hacer un query de los datos una vez y salvarlo en un arreglo con metodos de .forEcah y .key para jalar el id
// // database.ref('gastos')
// //     .once('value')
// //     .then((query) => {
// //         const gastos = [];
// //         query.forEach((elementoHijo) => {
// //             gastos.push({
// //                 id: elementoHijo.key,
// //                 // los ... hacen referencia todos los elementos anidados del objeto
// //                 ...elementoHijo.val()
// //             });
// //         });
// //         console.log(gastos);
// //     });


// // database.ref().set({
// //     nombre: 'Gustavo Lopez',
// //     edad: 26,
// //     trabajo: 'Barrendero',
// //     localizacion: {
// //         ciudad: 'Guslandia',
// //         pais: 'Estados Unidos de Gustavo'
// //     }
// // }).then( () => {
// //     console.log('Los datos han sido guardados en la BDD');
// // }).catch((error) => {
// //     console.log('Esto fallo el error fue: ', error);
// // });

// // database.ref().on('value', (queryBDD) => {
// //     console.log(queryBDD.val());
// // });

// // // Ahora para querys a la BDD pero solo una vez
// // database.ref('localizacion/ciudad')
// //     .once('value')
// //     .then( (snapshot) =>{
// //         const queryBDD = snapshot.val();
// //         console.log(queryBDD);
// //     })
// //     .catch((error) => {
// //         console.log('Error haciendo el query ',error)
// //     });

// // Ejemplo para matar toda la BDD
// //database.ref().set('Esta es mi gusdata');
// // Ejemplos de CRUD
// // database.ref('edad').set(27);
// // database.ref('localizacion/ciudad').set('Pueblastavo');

// // atributos de la persona como hijos
// // database.ref('atributos').set({
// //     altura: 177,
// //     peso: 80
// // }).then(() => {
// //   console.log('Escritura a la BDD exitosa');  
// // }).catch((error) => {
// //     console.log('Hubo un error: ', error);
// // });

// // const referenciaEsSoltero = database.ref('esSoltero');
// // referenciaEsSoltero
// //     .remove()
// //     .then( () => {
// //         console.log('Exito datso removidos');
// //     }).catch((error) => {
// //         console.log('Error ', error);
// //     });

// // Otra manera de borrar es poniendo algo como null
// //database.ref('esSoltero').set(null);

// // Manera rara de hacer update a objetos nesteados
// // database.ref().update({
// //     trabajo: 'Mas Barrendero',
// //     'localizacion/ciudad': 'Puelandia' 
// // });

console.log('Hice un request para cambiar los datos');
// Importamos path
const path =  require('path');
// Imporamos express
const express = require('express');
// Iniciamos una instacia de express
const app = express();
// Establecemos el path de la app le decimos que en el directorio publico se encuentran todos nuestros assets
const publicPath = path.join(__dirname, '..', 'public');
// Para establecer que puerto va a correr nuestra app
const puertoEnv = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Establecemos una ruta unica para que todas renderen la misma pagina de React que se encarga del ruteo de
// manera local
app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
});

// Inicializamos el servidor en el puerto 3000
app.listen(puertoEnv, () => {
    console.log('Servidor corriendo en ' + puertoEnv);
});
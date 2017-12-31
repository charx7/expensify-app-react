// Importacion del modulo de path para la configuracion de webpack
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    // Verifica si el build es de produccion
    const esProduccion = env === 'production';
    // Para el Css extract
    const CSSExtract = new ExtractTextPlugin('styles.css');
    console.log('env ', env); 

    return {
        // Donde WebPack debe buscar el archivo de entrada
        entry: './src/app.js',
        // Donde va el archivo de salida
        output: {
            path: path.join(__dirname,'public', 'dist'),
            filename: 'bundle.js'
        },
        // Configuracion del loader
        module: {
            rules: [{
                //Establecemos los loaders de BABEL
                loader: 'babel-loader',
                // verifica si el archivo termina en .js para correr el babel-loader
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                //Reglas para seleccionar todos los archivos que terminan en .scss y se tranformen
                test: /\.s?css$/,
                // Establecemos los loaders de SCSS que convierten en CSS
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            } 
                        },{
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        // Definimos los plugins de webpack
        plugins: [
            CSSExtract
        ],
        // Devtools para debugear sin pasar por el codigo del bundle.js cambia si el build es de prod o de dev
        devtool: esProduccion ? 'source-map' : 'inline-source-map',
        // Configuracion del WebDevServer como remplazo a live-server
        devServer: {
            contentBase: path.join(__dirname,'public'),
            // Establece que el routing sea client side (para dev)
            historyApiFallback: true,
            // Donde estan los assets
            publicPath: '/dist/'
        }
    }
};
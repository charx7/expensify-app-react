// Funcion que suma los gastos de un arreglo visible
export default ( elemento ) => {
    // Hace un arreglo con los valores de los gastos solamente de los elementos de gasto individuales
    let arregloGastos = elemento.map( function (gasto) {
        return gasto.monto
    }); 
    // Sumamos usando reduce
    let resultadoSuma = arregloGastos.reduce((a,b) => a + b, 0);
    return resultadoSuma
};
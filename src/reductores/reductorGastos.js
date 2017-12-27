// Reducer de los gastos
// Definimos el estado default del estado
const reductorGastosDefault = [];
// Definimos el reductor como una funcion pura
const reductorGastos = (estado = reductorGastosDefault, accion) => {
    switch (accion.type){
        case 'AGREGA_GASTO':
            return [
                // Otro operador para concatenar de otro manera con ...elementos, elemento a aniadir
                ...estado,
                accion.gasto
            ];
        case 'REMOVER_GASTO':
            // otra syntaxis estado.filter(elemento => elemento.id !== accion.id)   
            return estado.filter(({id}) => {
                return id != accion.idQuitar;
            })
        case 'EDITAR_GASTO':
            // Hace un mapeo a los elemento del arreglo para revisarlos uno por uno hasta encontrar el id
            return estado.map((elemento) => {
                // En caso de que encuentre el id procede a editarlo con el objeto pasado de accion
                if(elemento.id === accion.id) {
                    return {
                        // Toma todas las propiedades del elemento
                        ...elemento,
                        // Hace un overrride a las propiedades con los elementos pasados para editar
                        ...accion.actualizaciones
                    };
                } else {
                    // Regresa el elemento sin cambio alguno XD
                    return elemento;
                }
            });
        default: 
            return estado; 
    }
};

// Definimos el export del archivo
export default reductorGastos;
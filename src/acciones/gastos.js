import uuid from 'uuid'; // Para generar los id
// AQUI VAN LAS ACCIONES QUE TIENE QUE VER CON LOS GASTOS

// Accion de aniadir un gasto con valores de decontruccion default
export const agregarGasto = (
    { 
     descripcion = '',
     nota = '',
     monto = 0,
     creadoEn = 0
    } = {} 
    ) => ({
        type: 'AGREGA_GASTO',
        gasto: {
            id: uuid(),
            descripcion,
            nota,
            monto,
            creadoEn //Time Stamp
    }
});

// Accion Remover un gasto
export const removerGasto = ({ id: idQuitar} = {}) => ({
    type: 'REMOVER_GASTO',
    idQuitar
});

// Accion Editar un gasto
export const editarGasto = (id, actualizaciones) => ({
    type: 'EDITAR_GASTO',
    id,
    actualizaciones
});
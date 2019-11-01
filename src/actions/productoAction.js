import {
    CREAR_PRODUCTO,
    CREAR_PRODUCTO_EXITO,
    CREAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';

export function crearProductoAction (producto) {
    return (dispatch) => {
        dispatch(crearProducto());
        clienteAxios.post('/productos',producto)
            .then(() => {
                dispatch(crearProductoExito(producto));
            })
            .catch(() => {
                dispatch(crearProductoError());
            })
        
    }
}

export const crearProducto = () => ({
    type: CREAR_PRODUCTO
})

export const crearProductoExito = producto => ({
    type: CREAR_PRODUCTO_EXITO,
    payload: producto
})

export const crearProductoError = () => ({
    type: CREAR_PRODUCTO_ERROR
})
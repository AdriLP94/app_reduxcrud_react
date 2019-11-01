import {
    CREAR_PRODUCTO,
    CREAR_PRODUCTO_EXITO,
    CREAR_PRODUCTO_ERROR,
    DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    ELIMINAR_PRODUCTO,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTO,
    OBTENER_PRODUCTO_EXITO,
    OBTENER_PRODUCTO_ERROR,
    EDITAR_PRODUCTO,
    EDITAR_PRODUCTO_EXITO,
    EDITAR_PRODUCTO_ERROR
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

export function descargaProductosAction (productos) {
    return dispatch => {
        dispatch(descargaProductos());
        clienteAxios.get('/productos')
            .then(respuesta => {
                dispatch(descargaProductosExito(respuesta.data));
            })
            .catch(() => {
                dispatch(descargaProductosError());
            })  
    }
}

export const descargaProductos = () => ({
    type: DESCARGA_PRODUCTOS
})

export const descargaProductosExito = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

export const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR
})

export function eliminarProductoAction (id) {
    return dispatch => {
        dispatch(eliminarProducto());
        clienteAxios.delete(`/productos/${id}`)
            .then(respuesta => {
                dispatch(eliminarProductoExito(id));
            })
            .catch(() => {
                dispatch(eliminarProductoError());
            })  
    }
}

export const eliminarProducto = () => ({
    type: ELIMINAR_PRODUCTO
})

export const eliminarProductoExito = id => ({
    type: ELIMINAR_PRODUCTO_EXITO,
    payload: id
})

export const eliminarProductoError = () => ({
    type: ELIMINAR_PRODUCTO_ERROR
})

export function obtenerProductoAction (id) {
    return dispatch => {
        dispatch(obtenerProducto());
        clienteAxios.get(`/productos/${id}`)
            .then(respuesta => {
                dispatch(obtenerProductoExito(respuesta.data));
            })
            .catch(() => {
                dispatch(obtenerProductoError());
            })  
    }
}

export const obtenerProducto = () => ({
    type: OBTENER_PRODUCTO
})

export const obtenerProductoExito = producto => ({
    type: OBTENER_PRODUCTO_EXITO,
    payload: producto
})

export const obtenerProductoError = () => ({
    type: OBTENER_PRODUCTO_ERROR
})

export function editarProductoAction (producto) {
    return (dispatch) => {
        dispatch(editarProducto());
        clienteAxios.put(`/productos/${producto.id}`, producto)
            .then(() => {
                dispatch(editarProductoExito(producto));
            })
            .catch(() => {
                dispatch(editarProductoError());
            })    
    }
}

export const editarProducto = () => ({
    type: EDITAR_PRODUCTO
})

export const editarProductoExito = producto => ({
    type: EDITAR_PRODUCTO_EXITO,
    payload: producto
})

export const editarProductoError = () => ({
    type: EDITAR_PRODUCTO_ERROR
})
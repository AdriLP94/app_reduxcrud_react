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

const initialState = {
    productos : [],
    error : false,
    loading : false,
    productoEditar : {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREAR_PRODUCTO:
            return {
                ...state,
                error : false
            }
        case CREAR_PRODUCTO_EXITO:
            return {
                ...state,
                error : false,
                productos: [...state.productos, action.payload]
            }
        case CREAR_PRODUCTO_ERROR:
            return {
                ...state,
                error : true
            }
        case DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading : true,
                productoEditar: {}
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return {
                ...state,
                productos : action.payload,
                loading : false,
                error : false,
                productoEditar: {}
            }  
        case DESCARGA_PRODUCTOS_ERROR:
            return {
                ...state,
                productos : [],
                loading : false,
                error : true,
                productoEditar: {}
            }    
        case ELIMINAR_PRODUCTO:
            return {
                ...state,
                error : false
            }
        case ELIMINAR_PRODUCTO_EXITO:
            return {
                ...state,
                productos: state.productos.filter ( producto => producto.id !== action.payload)
            }
        case ELIMINAR_PRODUCTO_ERROR:  
            return {
                ...state,
                error : true
            }
        case OBTENER_PRODUCTO:
            return {
                ...state,
                error : false,
            }
        case OBTENER_PRODUCTO_EXITO:
                return {
                    ...state,
                    error : false,
                    productoEditar: action.payload
                }
        case OBTENER_PRODUCTO_ERROR:
            return {
                ...state,
                error : true,
            }
        case EDITAR_PRODUCTO:
            return {
                ...state,
                error : false
            }
        case EDITAR_PRODUCTO_EXITO:
            return {
                ...state,
                error : false,
                productos: state.productos.map (producto => producto.id === action.payload.id ? producto = action.payload : producto)
            }
        case EDITAR_PRODUCTO_ERROR:
            return {
                ...state,
                error : true
            }
        default:
            return state;
    }
}
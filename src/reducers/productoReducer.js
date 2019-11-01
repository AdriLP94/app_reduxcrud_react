import {
    CREAR_PRODUCTO,
    CREAR_PRODUCTO_EXITO,
    CREAR_PRODUCTO_ERROR
} from '../types';

const initialState = {
    productos : [],
    error : false,
    loading : false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case CREAR_PRODUCTO:
            return {
                ...state
            }
        case CREAR_PRODUCTO_EXITO:
            return {
                ...state,
                productos: [...state.productos, action.payload]
            }
        case CREAR_PRODUCTO_ERROR:
            return {
                ...state,
                error : true
            }
        default:
            return state;
    }
}
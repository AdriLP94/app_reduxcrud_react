import {combineReducers} from 'redux';
import productoReducer from './productoReducer';
import validacionReducer from './validacionReducer';

export default combineReducers ({
    producto:productoReducer,
    error:validacionReducer
});
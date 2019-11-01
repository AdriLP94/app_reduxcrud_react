import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

import {crearProductoAction} from '../actions/productoAction';
import {validarFormularioAction, validacionExito, validacionError} from '../actions/validacionAction';
import {useDispatch, useSelector} from 'react-redux';

const AddEditProducto = ({mensaje, history}) => {

    const [nombre, guardarNombre] = useState("");
    const [precio, guardarPrecio] = useState("");

    const dispatch = useDispatch();
    const crearProducto = (producto) => dispatch(crearProductoAction(producto));
    const validarFormulario = () => dispatch(validarFormularioAction());
    const validarFormularioExito = () => dispatch(validacionExito());
    const validarFormularioError = () => dispatch(validacionError());

    const error = useSelector(state => state.error.error);

    const submitCrearProducto = e => {
        e.preventDefault();

        validarFormulario();
        if ( nombre==="" || precio==="" ) {
            validarFormularioError();
            return;
        }

        validarFormularioExito();
        crearProducto({nombre,precio});
        history.push("/");
    }

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">{mensaje}</h2>
                        <form onSubmit={submitCrearProducto}>
                            <div className="form-group">
                                <label>Nombre producto</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre producto" 
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio producto</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio producto" 
                                    value={precio}
                                    onChange={e => guardarPrecio(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                        {error ? <div className="font-weight-bold alert alert-danger text-center mt-4"> Todos los campos son obligatorios</div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(AddEditProducto);
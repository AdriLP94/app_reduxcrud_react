import React, {useState, useEffect} from 'react';
import { withRouter } from 'react-router-dom';

import {crearProductoAction, obtenerProductoAction, editarProductoAction} from '../actions/productoAction';
import {validarFormularioAction, validacionExito, validacionError} from '../actions/validacionAction';
import {useDispatch, useSelector} from 'react-redux';

const AddEditProducto = ({mensaje, history, match}) => {

    const [nombre, guardarNombre] = useState("");
    const [precio, guardarPrecio] = useState("");
    const {id} = match.params;

    const dispatch = useDispatch();
    const validarFormulario = () => dispatch(validarFormularioAction());
    const validarFormularioExito = () => dispatch(validacionExito());
    const validarFormularioError = () => dispatch(validacionError());

    const error = useSelector(state => state.error.error);
    const errorCarga = useSelector(state => state.producto.error);
    const productoEditar = useSelector(state => state.producto.productoEditar);

    useEffect(()=>{
        if (typeof id !== 'undefined' && Object.keys(productoEditar).length === 0) {
            dispatch(obtenerProductoAction(id));
        } else {
            guardarNombre("");
            guardarPrecio("");
        }
        if (Object.keys(productoEditar).length !== 0 && nombre === "" && precio ==="") {
            guardarNombre(productoEditar.nombre);
            guardarPrecio(productoEditar.precio);
        }
    },[dispatch, id, productoEditar])

    const guardarProducto = e => {
        e.preventDefault();
        
        validarFormulario();
        if ( nombre==="" || precio==="" ) {
            validarFormularioError();
            return;
        }
        validarFormularioExito();
        
        if (typeof id !== 'undefined') {
            dispatch(editarProductoAction({nombre,precio,id}));
        } else {
            dispatch(crearProductoAction({nombre,precio}));
        }
        history.push("/");
    }

    if (typeof id !== 'undefined' && !productoEditar) return "Cargando..."

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">{mensaje}</h2>
                        <form onSubmit={guardarProducto}>
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
                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar</button>
                        </form>
                        {error ? <div className="font-weight-bold alert alert-danger text-center mt-4"> Todos los campos son obligatorios</div> : null}
                        {errorCarga ? <div className="font-weight-bold alert alert-danger text-center mt-4"> Hubo un error al cargar datos</div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(AddEditProducto);
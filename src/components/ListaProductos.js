import React, {Fragment, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {descargaProductosAction} from '../actions/productoAction'

import Producto from './Producto';

const ListaProductos = () => {

    const dispatch = useDispatch();

    const loading = useSelector(state => state.producto.loading);
    const error = useSelector(state => state.producto.error);
    const productos = useSelector(state => state.producto.productos);

    useEffect (() => {
        setTimeout(() => dispatch(descargaProductosAction()), 100);
    },[dispatch])

    return (
    <Fragment>
        <h2 className="text-center my-5">Listado de Productos</h2>
        <table className="table table-striped">
            <thead className="bg-primary table-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>   
            </thead>

            <tbody>
                {productos.map (producto =>(
                    <Producto key={producto.id}
                    producto = {producto}/>
                ))}
            </tbody>

        </table>
        {loading ? "cargando..." : null}
        {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</div> : null }
        </Fragment>
    );
};

export default ListaProductos;
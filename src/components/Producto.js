import React from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

import {useDispatch} from 'react-redux';
import {eliminarProductoAction} from '../actions/productoAction';

const Producto = ({producto}) => {

    const dispatch = useDispatch();

    const borrarProducto = id => {

        Swal.fire({
            title: '¿Estás seguro?',
            text: "Un producto eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'cancelar'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Eliminado!',
                'El producto se eliminó correctamente',
                'success'
              )

              dispatch(eliminarProductoAction(id))
            }
          })
        
    }

    return (
        <tr>
            <td>{producto.nombre}</td>
            <td><span className="font-weight-bold">{producto.precio}€</span></td>
            <td className="acciones">
                <Link to={`/productos/editar/${producto.id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button className="btn btn-danger" onClick={() => borrarProducto (producto.id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Producto;
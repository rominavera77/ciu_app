import React, { Fragment } from 'react';
import './changuito.css';
import Producto from './Producto';

const Changuito = ({changuito, agregarProducto}) => {
    return ( 
        <Fragment>
            <div className="changuito">
                <h3>Changuito de Compras</h3>
                {
                    changuito.length === 0

                    ?
                    ( 
                    <h3>Changuito vacío</h3>
                    )
                    : 
                    (
                changuito.map(                         //mapea el changuito
                    producto => (                       //por cada producto
                        <Producto                       //mostrame el producto con 
                            key = {producto.id} 
                            changuito= {changuito}  
                            agregarProducto = {agregarProducto}      //por su key
                            producto = {producto}       //y con sus propiedades
                        />
                    )
                ))}
            </div>
        </Fragment>
     );
}
 
export default Changuito;
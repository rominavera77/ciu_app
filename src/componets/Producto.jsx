import React, { Fragment } from 'react';

const Producto = ({producto, productos, changuito, agregarProducto}) => {       //recibe los productos

    //Acá  coloco el código Javascript -> antes del return
    //Extraigo los valores

    const {id, articulo, precio} = producto;

    //Función para agregar productos al changuito

    const seleccionarProducto = (id) => {
        const producto = productos.filter(      //de todos los productos que me traiga me filtre
            producto => producto.id === id)[0]; // el que le estoy pasando y como es un array le pido el primer elemento
            agregarProducto([
                ...changuito,       // ... copia el changuito y agrega el
                producto])         //agrega el producto que filtré al state changuito
            console.log(producto);                  // muestra por consola el producto
    };

    //Función para eliminar productos del changuito
    const eliminarProducto = (id) => {
        const productos = changuito.filter (
            producto => producto.id !== id);
    
        // Actualizar el state
            agregarProducto (productos);
    };
    

    return ( 
        <Fragment>
            <div>
                <h3>{id} {articulo} {precio}</h3>
                {                       //hago un ternario 
                    productos            //si hay productos 

                    ?                   // hace lo que viene
                        <button
                            type="button"
                            onClick={ () => seleccionarProducto(id)}
                        >Comprar</button>
                    :                   //si no 
                        <button 
                            type="button"
                            onClick={() => eliminarProducto(id)}
                        >Eliminar</button>
                }
                
            </div>
            
        </Fragment>
        
     );
}
 
export default Producto;

 
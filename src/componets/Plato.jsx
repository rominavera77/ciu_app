import React, { Fragment } from 'react'

const Plato = ({plato}) => {

//Extraigo los valores

//const {id, plato, precio} = plato;

    return ( 
        <Fragment>
            <div>
                <h2>{plato.id} {plato.plato} {plato.precio} </h2>
                {/* <h2>{id} {plato} {precio} </h2> */}
                <button type = "button">
                   Comprar
                </button>
            </div>  
        </Fragment>
        
        
        
     );
}
 
export default Plato;

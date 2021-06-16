import { Fragment, useState } from 'react';
import Footer from './componets/Footer'
import Header from './componets/Header' 
//import Plato from './componets/Plato';
import Producto from './componets/Producto';
import Changuito from './componets/Changuito';

function App() {
  //Listado de productos con un state

  const [productos, guardarProductos] = useState([
    {id:1, articulo:"Paella", precio:1800},
    {id:2, articulo:"Arroz con Mariscos", precio:1600}, 
    {id:3, articulo:"Rabas", precio:1200},
    {id:4, articulo:"Mejillones", precio:1000},
    {id:5, articulo:"Calamares", precio:900},
  ]);

  //State del changuito
  const [changuito, agregarProducto] = useState([]);  //es un array que inicia vacío

  // Carta del restaurant

 /*  const [menu, agregarPlato] = useState([
    {id:1, plato:"Paella",precio:1200},
    {id:2, plato:"Calamares", precio:800},
    {id:3, plato:"Rabas", precio:1000},
    {id:4, plato:"Mejillones", precio:900}
  ])
; */

  return (
    <Fragment>
      <Header />
      <h1>Marisquería Los Lolos - Haga su pedido online</h1>
      {productos.map(producto => (
        <Producto 
          key={producto.id}
          producto = {producto}     //paso la propiedad al hijo, es decir al compoente Producto
          productos = {productos}   //le paso todos los productos al componete Producto
          changuito = {changuito}   //le paso el chanquito al componente Producto 
          agregarProducto = {agregarProducto}   //le paso la función al componente Producto
        />
      ))}

      <Changuito
        changuito = {changuito}
        agregarProducto = {agregarProducto}  
      />
      
      {/* {menu.map(plato => (
        <Plato 
          key= {plato.id}
          plato = {plato}   //paso la PROPIEDAD al hijo, es decir el componente Plato
        />
      )
      )} */}
      <Footer 
        // Creo el componente y le paso las propiedades desde el padre hacia el hijo
        anio={"2021"}     //propiedad que le paso al hijo, ahora lo paso
      />
    </Fragment>
  );
}

export default App;

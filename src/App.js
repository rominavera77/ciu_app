import { Fragment, useState } from 'react';
import Footer from './componets/Footer'
import Header from './componets/Header' 
import Plato from './componets/Plato';

function App() {

  // Carta del restaurant

  const [menu, agregarPlato] = useState([
    {id:1, plato:"Paella",precio:1200},
    {id:2, plato:"Calamares", precio:800},
    {id:3, plato:"Rabas", precio:1000},
    {id:4, plato:"Mejillones", precio:900}
  ])
;

  return (
    <Fragment>
      <Header />
      <h1>Marisquería Los Lolos - Haga su pedido online</h1>
      {menu.map(plato => (
        <Plato 
          key= {plato.id}
          plato = {plato}   //paso la PROPIEDAD al hijo, es decir el componente Plato
        />
      )
      )}
      <Footer 
        // Creo el componente y le paso las propiedades desde el padre hacia el hijo
        anio={2021}     //propiedad que le paso al hijo
      />
    </Fragment>
  );
}

export default App;

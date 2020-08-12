import React, { Fragment } from 'react';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Contactos from './Components/Contactos';
import Carousel from './Components/Carousel';
import Proyects from './Components/Proyects';

function App() {
  return (
    <Fragment>
      <Navigation/>
      <Carousel/>
      <div className="container">

        <Proyects/>
        <Contactos/>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default App;

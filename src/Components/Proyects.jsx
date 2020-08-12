import React from 'react'
import '../assets/styles/proyects.css';
import lt1 from '../assets/img/lt/lt.jpg';
import e2 from '../assets/img/epson/2.png';
import b1 from '../assets/img/bdp/1.jpg'

export default function Proyects() {
  return (
    <div id="proyectos">
      <h1 className="title-proyects">Proyectos a destacar</h1>
      <div className="proyects-container">
        <div className="card-style">
          <img src={lt1} alt="lt"/>
          <h3>LessTrafic</h3>
          <p>Este sistema te permite conocer la densidad del trafico vehicular en determinados sectores de la ciudad de Guayaquil. Nacio con la idea de aliviar el exceso vehicular en ciertas avenidas principales.</p>
          <span>Ver mas...</span>
        </div>
        <div className="card-style">
          <img src={e2} alt="lt"/>
          <h3>Impresora Epson</h3>
          <p>600*300Este sistema te permite conocer la densidad del trafico vehicular en determinados sectores de la ciudad de Guayaquil. Nacio con la idea de aliviar el exceso vehicular en ciertas avenidas principales.</p>
          <span>Ver mas...</span>
        </div>
        <div className="card-style">
          <img src={b1} alt="lt"/>
          <h3>Banco del Pacifico</h3>
          <p>600*400 Este sistema te permite conocer la densidad del trafico vehicular en determinados sectores de la ciudad de Guayaquil. Nacio con la idea de aliviar el exceso vehicular en ciertas avenidas principales.</p>
          <span>Ver mas...</span>
        </div>
        <div className="card-style">
          <img src={lt1} alt="lt"/>
          <h3>LessTrafic</h3>
          <p>Este sistema te permite conocer la densidad del trafico vehicular en determinados sectores de la ciudad de Guayaquil. Nacio con la idea de aliviar el exceso vehicular en ciertas avenidas principales.</p>
          <span>Ver mas...</span>
        </div>
       
      </div>
    </div>
  )
}

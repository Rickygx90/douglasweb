import React from 'react'

export default function Navigation() {

  const handleMenu = (e) => {
    let stl = document.getElementById("listMenu").style;
    if(stl.display === 'flex'){
      stl.display = 'none';
    }else{
      stl.display = 'flex';
    }
  }

  return (
    <nav className="nav-style">
      <div>
        <a href="#">Douglas</a>
      </div>
      <span onClick={handleMenu} className="menu-icon-style"><i className="fas fa-bars"></i></span>
      <ul id="listMenu">
        <li>
          <a href="#mision">Mision/Vision</a>
        </li>
        <li>
          <a href="#experiencia">Experiencia</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#contactos">Contactos</a>
        </li>
      </ul>
    </nav>
  )
}

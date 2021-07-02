import './Nav.css'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

function Nav() {
  return (
    <div>
     <nav>
       <ul class="menu">
          <li class="item">
          <Link to="/">Home</Link>
          </li>
            <li class="item">
            <NavLink to="/equipo" activeClassName="active">Equipos</NavLink>
            </li>
              <li class="item">
              <NavLink to="/servicios" activeClassName="active">Servicios</NavLink>
              </li>
              <li class="item"><NavLink to="/Agenda tu cita" >Agenda tu cita</NavLink></li>
              <li class="item"><NavLink to="/contactanos">Contactanos</NavLink></li>
       </ul> 
      </nav>
    </div>
   
  );
}

export default Nav;
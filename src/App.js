import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Equipo from './Equipo';
import Servicios from './Servicios';
import Error404 from './Error404';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
    
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Nav />
        <div> 
        <Switch>
           <Route exact path="/">  
           </Route>        
            <Route exact path="/equipo" >
              <Equipo />
            </Route>
            <Route exact path="/servicios" sensitive>
             <Servicios />
            </Route>
            <Route path="*">
              <Error404 />
              </Route>
            
         </Switch>   
         </div>
                      
                 
        <Footer />
         
      </Router>
      
    </div>
  );
}

export default App;

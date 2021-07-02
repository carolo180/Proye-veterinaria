import logos from './logo.jpg';
import './Header.css'


function Header() {
  return (
    <header>
      <div className="logo">
         <img src={logos} className="log" alt="logo" />
           <button className="btn-blanco"><i class="fas fa-user"> Registrarse</i></button>
           <button className="btn-azul"><i class="fas fa-power-off"> Ingresar</i></button>
        </div>
       
        
    </header>
   
  );
}

export default Header;

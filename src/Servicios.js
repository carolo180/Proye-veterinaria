import './Servicios.css'
import paciente from './paciente.png';
import veterinario from './veterinario.png';
import perro from './perro.png';


function Servicios() {
  return (
      
 <section id="serv">
     <h1>SERVICIOS</h1>
     <div id="vet">
     <article className="carta">
     <img src={paciente} className="logis" alt="logo" />
     <h2>Card-title</h2>
     <p>This is a longer card with supporting text -below as natural card with supporting text  </p>

     </article>
     <article className="carta">
     <img src={veterinario} className="logis" alt="logo" />
     <h2>Servicios</h2>
     <p>This is a longer card with supporting text -below as natural card with supporting text  </p>
         
     </article>
     <article className="carta">
     <img src={perro} className="logis" alt="logo" />
     <h2>Vacunacion</h2>
     <p>This is a longer card with supporting text -below as natural card with supporting text  </p>
       
     </article>
     </div>
 </section>
     
   
  );
}

export default Servicios;
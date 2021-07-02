import './Equipo.css'
import descarga from './descarga.png';


function Equipo() {
  return (
    <section id="foneq">
        <article className="parra">
            <h1>AGENDA UNA CITA PARA RECLAMAR TU PRIMER BAÑO GRATIS</h1>
            <p>Queremos que conozcas nuestra propuesta de baño pra mascotas donde tenemos espacios dedicados para evitar la contaminacion
                que puede llegar a existir en una veterinaria. Aplica de lunes a viernes
                para mascotas que visitan la clinica por primera vez.
            </p>
            <h4>RECUERDA QUE NUESTRO EQUIPO MEDICO TE CONFIRMARA LA CITA</h4>
            <button className="blanco"><i class="fas fa-user"> Agendar</i></button>
        </article>
        <article className="fot">
            <div className="pur">
                <h1>GRATIS PRIMER BAÑO</h1>
                <img src={descarga} className="logi" alt="logo" />
            </div>

        </article>

    </section>  
     
   
  );
}

export default Equipo;
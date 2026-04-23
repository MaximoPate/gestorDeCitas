import "./Card.css";

function Card({mascota, dueño, fecha, hora, sintomas}) {
    return (
        <div class="cita">
              <p>Mascota: <span>{mascota}</span></p>
              <p>Dueño: <span>{dueño}</span></p>
              <p>Fecha: <span>{fecha}</span></p>
              <p>Hora: <span>{hora}</span></p>
              <p>Sintomas: <span>{sintomas}</span></p>
              <button class="button elimnar u-full-width" >Eliminar ×</button>
        </div>
    );
}

export default Card;
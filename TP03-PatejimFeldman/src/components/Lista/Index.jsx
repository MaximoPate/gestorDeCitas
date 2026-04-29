import Card from "../Card/Index";
import "./Lista.css";


function Lista({citas, setCitas, eliminarCita}) {

    return (
        <section class="listado-citas">
        {
            citas.map(n => (
                <Card
                    id={n.id}
                    mascota={n.mascota}
                    dueño={n.propietario}
                    fecha={n.fecha}
                    hora={n.hora}
                    sintomas={n.sintomas}
                    onDelete={eliminarCita}
                />
            ))
        }
        </section>
    );
}

export default Lista;
import Card from "../Card/Index";
import "./Lista.css";


function Lista({citas, setCitas}) {


    return (
        <section class="listado-citas">
        <Card
            mascota="Nina"
            dueño="Martin"
            fecha="2021-08-05"
            hora="08:20"
            sintomas="Le duele la pierna"
        />
        <Card
            mascota="Sifón"
            dueño="Flecha"
            fecha="2021-08-05"
            hora="08:20"
            sintomas="Le duele la pierna"
        />
        <Card
            mascota="Nina"
            dueño="Martin"
            fecha="2021-08-05"
            hora="08:20"
            sintomas="Le duele la pierna"
        />
        {
            citas.map(n => 
                <Card
                    mascota={n.mascota}
                    dueño={n.propietario}
                    fecha={n.fecha}
                    hora={n.hora}
                    sintomas={n.sintomas}
                />
            )
        }
        </section>
    );
}

export default Lista;
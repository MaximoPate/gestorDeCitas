import "./Form.css";

function Form({ setCitas }) {

    const agregarCita = (e) => {
        e.preventDefault();
        
        const form = e.target;

        const nueva = {
            id: Date.now(),
            mascota: form.mascota.value,
            propietario: form.propietario.value,
            fecha: form.fecha.value,
            hora: form.hora.value,
            sintomas: form.sintomas.value
        };

        setCitas(prev => [...prev, nueva]);

        form.reset();
    }

    return (

        <form onSubmit={agregarCita}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" />

            <label>Nombre Dueño</label>
            <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" />

            <label>Fecha</label>
            <input type="date" name="fecha" class="u-full-width"/>

            <label>hora</label>
            <input type="time" name="hora" class="u-full-width"/>

            <label>Sintomas</label>
            <textarea name="sintomas" class="u-full-width"></textarea>

            <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
        </form>
    );
}

export default Form;
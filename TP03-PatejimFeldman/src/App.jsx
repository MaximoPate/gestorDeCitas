import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './components/Title/Index'
import Form from './components/Form/Index'
import Lista from './components/Lista/Index'

function App() {
  const [citas, setCitas] = useState(() => {
    const raw = localStorage.getItem('citas')
    return raw ? JSON.parse(raw) : []
  })

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas])
  
  const eliminarCita = (id) => {
      if (!window.confirm('¿Estás seguro que quieres eliminar esta cita?')) return;
    setCitas(prev => prev.filter(cita => cita.id !== id));
  }

  return (
    <>
      <Title />
      <section>
        <div>
          <h1>CREAR MI CITA</h1>  
          <Form setCitas={setCitas} />
        </div>
        <div>
          <h1>ADMINISTRA TUS CITAS</h1>
          <Lista citas={citas} eliminarCita={eliminarCita} />
        </div>
      </section>
    </>
  )
}

export default App

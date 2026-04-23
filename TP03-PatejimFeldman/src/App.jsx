import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Title from './components/Title/Index'
import Form from './components/Form/Index'
import Lista from './components/Lista/Index'

function App() {
  const [count, setCount] = useState(0)
  const [citas, setCitas] = useState([])

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
          <Lista citas={citas} setCitas={setCitas} />
        </div>
      </section>
    </>
  )
}

export default App

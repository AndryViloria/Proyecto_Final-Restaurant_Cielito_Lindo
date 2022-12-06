import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Context from './context/context.js'

//componentes
import Navbar from './components/Navbar.jsx'
import Pedido from './components/Pedido.jsx'
import Footer from './components/Footer.jsx'

//views
import Home from './view/Home.jsx'
import Carta from './view/Carta.jsx'
import Detalle from './view/Detalle.jsx'
import Iniciar from './view/Iniciar.jsx'
import Registrarse from './view/Registrarse.jsx'




function App() {
  const[carta, setCarta] = useState([])
  useEffect(() => {
    fetch('/carta.json')
      .then((res) => res.json())
      .then((json) => setCarta(json))
      .catch((error) => console.log(error))
  }, [])
 const globalState = {carta}

  return (
    <div className="App">
    <Context.Provider value={globalState}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/iniciar' element={<Iniciar />}></Route>
          <Route path='/registrarse' element={<Registrarse />}></Route>
        
          <Route path='/carta' element={<Carta />}></Route>
          <Route path='/detalle/' element={<Detalle />}></Route>
          <Route path='/pedido' element={<Pedido />}></Route>
        
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Context.Provider>
    </div> 
  )
}

export default App

import './App.css'
//importar rutas
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Context from './context/context.js'

//componentes
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

//views
import Home from './view/Home.jsx'
import Carta from './view/Carta.jsx'
import Carro from './view/Carro.jsx'
import Pagar from './view/Pagar.jsx'
import NotFound from './view/NotFound.jsx'
import Detalle from './view/Detalle.jsx'
import Iniciar from './view/Iniciar.jsx'

import { formatearPrecio } from './utilidades/utilidades.js'

function App() {
  const [carta, setCarta] = useState([])
  const [carro, setCarro] = useState([])

  const addToCarro = (item) => {
    const itemIndex = carro.findIndex((producto) => producto.id === item.id)
    const updateCarro = [...carro]

    if (itemIndex === -1) {
      const producto = {
        id: item.id,
        count: 1,
        price: item.price,
        img: item.img,
        name: item.name
      }

      updateCarro.push(producto)

    } else {
      updateCarro[itemIndex].count += 1
    }

    setCarro(updateCarro)
  }

  const removeFromCarro = (item) => {
    const itemIndex = carro.findIndex((producto) => producto.id === item.id)
    const updateCarro = [...carro]

    updateCarro[itemIndex].count -= 1

    if (updateCarro[itemIndex].count <= 0) {
      updateCarro.splice(itemIndex, 1)
    }

    setCarro(updateCarro)
  }

  const carroTotal = () => {
    let total = 0
    carro.forEach((item) => total += item.count * item.price)

    return formatearPrecio(total)
  }

  useEffect(() => {
    fetch('/carta.json')
      .then((res) => res.json())
      .then((json) => setCarta(json))
      .catch((error) => console.log(error))
  }, [])


  const globalState = { carta, carro, addToCarro, removeFromCarro, carroTotal }

  return (
    <div className="App">
      {/* rutas */}
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar></Navbar>
          {/* proteger página iniciar */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/iniciar' element={<Iniciar />}></Route>

            <Route path='/carta' element={
              <ProtectedRoute>
                <Carta></Carta>
              </ProtectedRoute>
            }></Route>

            <Route path='/carta' element={<Carta />}></Route>
            <Route path='/detalle/:id' element={<Detalle />}></Route>
           
            <Route path='/carro' element={<Carro />}></Route>
            <Route path='/pagar' element={<Pagar />}></Route>
            <Route path='*' element={<NotFound />}></Route>

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App

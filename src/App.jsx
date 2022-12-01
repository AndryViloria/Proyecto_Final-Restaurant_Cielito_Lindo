import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './view/Home.jsx'
import Iniciar from './view/Iniciar.jsx'
import Registrarse from './view/Registrarse.jsx'
import AgregarProducto from './view/AgregarProducto.jsx'
import Menu from './view/Menu.jsx'
import Detalle from './view/Detalle.jsx'
import Cart from './view/Cart.jsx'
import Footer from './components/Footer.jsx'
import Productos from './view/Productos.jsx'

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/productos/:id" element={<Productos/>}></Route>
        <Route path='/Iniciar' element={<Iniciar />}></Route>
        <Route path='/Registrarse' element={<Registrarse />}></Route>
        <Route path='/AgregarProducto' element={<AgregarProducto />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route path='/Detalle' element={<Detalle />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>

      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div> 
  )
}

export default App

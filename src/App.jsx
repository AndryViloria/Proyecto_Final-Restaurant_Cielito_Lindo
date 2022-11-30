import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Home from './view/Home.jsx'
import Footer from './components/Footer.jsx'

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>

      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div> 
  )
}

export default App

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../context/context.js'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const {carroTotal} = useContext(Context)

    const token = localStorage.getItem('token')

    //función cerrarSesion
    const cerrarSesion = () =>{
    localStorage.removeItem('token')
    navigate('/') 
}

    const location = useLocation()

    return (
        <header className="encabezado">

            <nav className="menu">
                <div className="logo_nombre">
                    <Link to="/"><img src="logo_charro.png" alt='Logo de Restaurant' /></Link>
                    <h1>Cielito Lindo</h1>
                </div>
                
                {location.pathname === "/" && <div className="btns">
                    <Link to="/carta"><button>Carta</button></Link>
                    
                    {token === null ? 
                    <Link to="/iniciar"><button>Iniciar Sesión</button></Link> : <button className='cerrar-sesion' onClick={cerrarSesion}>Cerrar Sesión</button>}
                </div>}

                {(location.pathname === "/carta" || location.pathname.startsWith('/detalle') || location.pathname === '/carro') &&
                    <p className='precio'><Link to="/carro"><i className="fas fa-shopping-cart"> </i></Link> ${carroTotal()}</p>
                }
            </nav>

        </header>
    )
}

export default Navbar
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'//Hook que sirve para saber las rutas

const Navbar = () => {
    const location = useLocation()//crear variable location para ejecutar useLocation
    console.log(location.pathname);//obtengo la ruta 
    return (
        <header className="encabezado">

            <nav className="menu">
                <div className="logo_nombre">
                    <Link to="/"><img src="logo_charro.png" alt='Logo de Restaurant' /></Link>
                    <h1>Cielito Lindo</h1>
                </div>
                {/* si location.pathname es estrictamente igual al home muestrame los botones */}
                {location.pathname === "/" && <div className="btns">
                    <Link to="/carta"><button>Carta</button></Link>
                    <Link to="/iniciar"><button>Iniciar Sesión</button></Link>
                </div>}

                {/* si si location.pathname es estrictamente igual a la vista carta, detalle y cart muestra un carrito */}
                {(location.pathname === "/carta" || location.pathname.startsWith('/detalle') || location.pathname === '/pedido') &&
                    <p className='precio'><Link to="/pedido"><i className="fas fa-shopping-cart"> </i></Link> $</p>
                }
            </nav>

        </header>
    )
}

export default Navbar
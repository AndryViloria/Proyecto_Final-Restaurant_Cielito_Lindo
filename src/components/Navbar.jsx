import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <header className="encabezado">


            <nav className="menu">
                <div className="logo_nombre">
                    <img src="./src/assets/logo_charro.png" alt='Logo de Restaurant' />
                    <h1>Cielito Lindo</h1>
                </div>

                <div className="btns">
                    <Link to="/menu"><button>Menú</button></Link>

                    <Link to="/iniciar"><button>Iniciar Sesión</button></Link>
                </div>

            </nav>

        </header>
    )
}

export default Navbar
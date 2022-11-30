const Navbar = () => {
    return (
        <header className="encabezado">


            <nav className="menu">
                <div className="logo_nombre">
                    <img src="./src/assets/logo_charro.png" alt='Logo de Restaurant' />
                    <h1>Cielito Lindo</h1>
                </div>

                <div className="btns">
                    <button>Menú</button>
                    <button>Iniciar Sesión</button>
                </div>

            </nav>

        </header>
    )
}

export default Navbar
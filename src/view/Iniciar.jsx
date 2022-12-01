import { Link } from "react-router-dom"


const Iniciar = () => {
    return (
        <main>
            <h1>Iniciar Sesión</h1>
            <form>
                <label for="correo">Ingrese usuario o correo electrónico</label>
                <input type="email" id="correo"></input>

                <label for="contraseña">Ingrese la contraseña</label>
                <input type="password" id="contraseña"></input>

                <div>
                    <Link to="/menu"><button>Iniciar Sesión</button></Link>
                    <Link to="/"><button>Volver</button></Link>

                    <p>¿Aún no tienes cuenta? <Link to="/registrarse"><strong>Registrate</strong></Link></p>
                </div>

            </form>
        </main>
    )
}

export default Iniciar
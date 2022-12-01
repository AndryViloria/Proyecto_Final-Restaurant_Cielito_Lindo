import { Link } from "react-router-dom"

const Registrarse = () => {
    return (
        <main>
            <h1>Registrarse</h1>
            <form>
                <label for="correo">Ingrese usuario o correo electrónico</label>
                <input type="email" id="correo"></input>

                <label for="contraseña">Ingrese la contraseña</label>
                <input type="password" id="contraseña"></input>

                <div>
                    <Link to="/menu"><button>Registrarme</button></Link>
                    <Link to="/"><button>Volver</button></Link>

                </div>

            </form>
        </main>
    )
}

export default Registrarse
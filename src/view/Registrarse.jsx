import { Link } from "react-router-dom"

const Registrarse = () => {
    return (
        <main>
            <h2>Registrarse</h2>
            <form>
                <label for="correo">Ingrese usuario o correo electrónico</label>
                <input type="email" id="correo" placeholder="ejemplo@correo.com"></input>

                <label for="contraseña">Ingrese la contraseña</label>
                <input type="password" id="contraseña" placeholder="Contraseña"></input>

                <div className="btn-form">
                    <Link to="/agregarProducto"><button className="iniciar-sesion">Registrarme</button></Link>
                    <Link to="/"><button className="volver">Volver</button></Link>
                </div>

            </form>
        </main>
    )
}

export default Registrarse
import { Link } from "react-router-dom"


const Iniciar = () => {
    return (
        <main>
            <h2>Iniciar Sesión</h2>
            <form>
                <label for="correo">Ingrese usuario o correo electrónico</label>
                <input type="email" id="correo" placeholder="ejemplo@correo.com"></input>
 
                <label for="contraseña">Ingrese la contraseña</label>
                <input type="password" id="contraseña" placeholder="Contraseña"></input>

                <div className="btn-form">
                    <Link to="/menu"><button className="iniciar-sesion">Iniciar Sesión</button></Link>
                    <Link to="/"><button className="volver">Volver</button></Link>
                </div>

                <p>¿Aún no tienes cuenta? <Link to="/registrarse"><span>Registrate</span></Link></p>

            </form>
        </main>
    )
}

export default Iniciar
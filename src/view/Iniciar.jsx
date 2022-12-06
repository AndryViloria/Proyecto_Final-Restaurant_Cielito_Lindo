import { Link } from "react-router-dom"
import { useState } from 'react'

const Iniciar = () => {
const [correo, setCorreo] = useState('')
const [pass, setPass] = useState('')
    return (
        <main>
            <h2>Iniciar Sesión</h2>
            <form>
                <label for="correo">Ingrese su correo electrónico</label>
                <input setCorreo={setCorreo} type="email" id="correo" placeholder="ejemplo@correo.com"></input>
 
                <label for="contraseña">Ingrese la contraseña</label>
                <input setPass={setPass} type="password" id="contraseña" placeholder="Contraseña"></input>

                <div className="btn-form">
                    <Link to="/carta"><button className="iniciar-sesion">Iniciar Sesión</button></Link>
                    <Link to="/"><button className="volver">Volver</button></Link>
                </div>

                <p>¿Aún no tienes cuenta? <Link to="/registrarse"><span>Registrate</span></Link></p>

                {correo && pass === '252525'}
            </form>
        </main>
    )
}

export default Iniciar
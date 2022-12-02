import { Link } from "react-router-dom"

const Registrarse = () => {
    return (
        <main>
            <h2>Registrarse</h2>
            <form>
                <label for="nombre">Ingrese su nombre y apellido</label>
                <input type="text" id="nombre" placeholder="Escriba su nombre y apellido"></input>

                <label for="correo">Ingrese su correo electrónico</label>
                <input type="email" id="correo" placeholder="ejemplo@correo.com"></input>

                <label for="rut">Ingrese el rut</label>
                <input type="text" id="rut" placeholder="Escriba su rut"></input>

                <label for="telefono">Ingrese su teléfono</label>
                <input type="tel" id="telefono" placeholder="Escriba su número de teléfono"></input>

                <label for="direccion">Ingrese su dirección</label>
                <input type="text" id="direccion" placeholder="Escriba su dirección"></input>

                <label for="contraseña">Ingrese la contraseña</label>
                <input type="password" id="contraseña" placeholder="Escriba su contraseña"></input>

                <div className="btn-form">
                    <Link to="/menu"><button className="iniciar-sesion">Registrarme</button></Link>
                    <Link to="/"><button className="volver">Volver</button></Link>
                </div>

            </form>
        </main>
    )
}

export default Registrarse
import { Link } from "react-router-dom"

const Admin = () => {
    return (
        <main>
            <h2>Registrar Administrador</h2>

            <form>
                
                <label for="correo">Ingrese su correo electrónico</label>
                <input type="email" id="correo" placeholder="ejemplo@correo.com"></input>

                <label for="contraseña">Ingrese la contraseña</label>
                <input type="password" id="contraseña" placeholder="Escriba su contraseña"></input>

                <div className="btn-form">
                    <Link to="/agregarProducto"><button className="iniciar-sesion">Registrarme</button></Link>
                    <Link to="/"><button className="volver">Volver</button></Link>
                </div>

            </form>
        </main>
    )
}

export default Admin
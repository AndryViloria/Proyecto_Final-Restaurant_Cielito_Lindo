import { Link } from "react-router-dom"

const AgregarProducto = () => {
    return (
        <main>
            <h2>Agregar Nuevo Producto</h2>
            <form>
                <label for="nombre_producto">Nombre del Producto</label>
                <input type="texto" id="nombre_producto" placeholder="Nombre"></input>

                <label for="valor">Valor $</label>
                <input type="number" id="valor" placeholder="Valor en Pesos Chilenos ($)"></input>

                <label for="enlace">URL</label>
                <input type="url" id="enlace" placeholder="Ingrese su URL https://texto.com"></input>

                <label>Características del Producto</label>
                <textarea></textarea>

                <div className="btn-form">
                    <Link to="/detalle"><button className="agregar-producto">Agregar Producto</button></Link>
                    <Link to="/"><button className="volver">Volver</button></Link>
                </div>

            </form>
        </main>
    )
}

export default AgregarProducto
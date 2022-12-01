const AgregarProducto = () => {
    return (
        <main>
            <h1>Agregar Nuevo Producto</h1>
            <form>
                <label for="nombre_producto">Nombre del Producto</label>
                <input type="texto" id="nombre_producto"></input>

                <label for="valor">Valor $</label>
                <input type="number" id="valor"></input>

                <label for="url">URL</label>
                <input type="url" id="url"></input>

                <label>Características del Producto</label>
                <textarea>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, autem.</textarea>

                <div>
                    <button>Agregar Producto</button>
                    <button>Volver</button>

                </div>

            </form>
        </main>
    )
}

export default AgregarProducto
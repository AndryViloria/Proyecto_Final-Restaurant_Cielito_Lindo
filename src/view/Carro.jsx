import Pedido from "../components/Pedido.jsx"
import { useContext } from "react"
import Context from "../context/context.js"
import { Link } from "react-router-dom"

const Carro = () => {
    const { carro, addToCarro, removeFromCarro, carroTotal } = useContext(Context)

    return (
        <main>
            <div className="carro-vacio">
                {/* Usamos un condicional que quiere decir que si hay elementos carge pedido sino que muestre el mensaje. En pedido pasamos la promt pasando el listado*/}
                {carro.length !== 0 ? (
                        <Pedido carro={carro}
                            addToCarro={addToCarro}
                            removeFromCarro={removeFromCarro}
                            carroTotal={carroTotal}>
                        </Pedido>
                       ) :( <p>No hay productos seleccionados en el carrito</p>
                )}
            </div>
        </main>
    )
}

export default Carro
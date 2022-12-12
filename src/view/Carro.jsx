import Pedido from "../components/Pedido.jsx"
import { useContext } from "react"
import Context from "../context/context.js"

const Carro = () => {
    const { carro, addToCarro, removeFromCarro, carroTotal } = useContext(Context)

    return (
        <main>
            <div className="carrito">
                {
                    carro.length !== 0 ?
                        <Pedido carro={carro}
                            addToCarro={addToCarro}
                            removeFromCarro={removeFromCarro}
                            carroTotal={carroTotal}>
                        </Pedido>
                        : <p className="carroVacio">No hay elementos seleccionados en el carrito</p>
                }
            </div>
        </main>
    )
}

export default Carro
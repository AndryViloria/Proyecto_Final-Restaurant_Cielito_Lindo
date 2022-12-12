import { formatearPrecio } from '../utilidades/utilidades.js'
import { Link } from 'react-router-dom'

const Pedido = ({ carro, addToCarro, removeFromCarro, carroTotal }) => {
    return (
        <main>
            <h2>Detalle de la compra</h2>
            <div>
                <ul>
                    {
                        carro.map((item) => {
                            return (
                                <li key={item.id}>
                                    <div className="product">
                                        <img src={item.img} alt={item.name} />
                                        <h4>{item.name}</h4>
                                    </div>
                                    <div className="price">
                                        <h4>$ {formatearPrecio(item.price * item.count)}</h4>
                                    </div>
                                    <div className="btns">
                                        <button className="agregar-disminuir button" onClick={() => removeFromCarro(item)}>-</button>
                                        <p className="bold">{item.count}</p>
                                        <button className="agregar-disminuir button" onClick={() => addToCarro(item)}>+</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="total">
                    <h3>Total: $ {carroTotal()} </h3>
                    <Link to="/pagar" className="button">Ir a pagar</Link>
                </div>
            </div>
        </main>
    )
}

export default Pedido
// import { Link } from "react-router-dom"

// const Cart = () => {
//     return (
//         <main>
//             <div className="cart">
//                 <h2>Detalle del pedido:</h2>

//                 <section>
//                     <article className="pedido">
//                         <img src="https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFjb3MlMjBtZXhpY2Fub3N8ZW58MHwxfDB8fA%3D%3D&auto=format&fit" alt="Imagen de tacos surtidos"></img>
//                         <h3>Tacos Surtidos</h3>
//                         <p> $ 10.490</p>
//                         <button type="button"> + </button>
//                         <p> 1 </p>
//                         <button type="button"> - </button>
//                     </article>

//                     <div className="total_pagar">
//                         <p>Total: $ 10.490</p>
//                         <button type="button">Ir a Pagar</button>
//                     </div>
//                 </section>
//             </div>
//         </main>
//     )
// }

// export default Cart


import { formatearPrecio } from "../utils/utils.js"
import { Link } from 'react-router-dom'

const Cart = ({ carro, addToCarro, removeFromCart, cartTotal }) => {
    return (
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
                                    <button className="agregar-disminuir button" onClick={() => removeFromCart(item)}>-</button>
                                    <p className="bold">{item.count}</p>
                                    <button className="agregar-disminuir button" onClick={() => addToCarro(item)}>+</button>
                                </div>

                            </li>
                        )
                    })
                }
            </ul>

            <div className="total">
                <h3>Total: $ {cartTotal()} </h3>
                <Link to="/pagar" className="button">Ir a pagar</Link>
            </div>
        </div>
    )
}

export default Cart
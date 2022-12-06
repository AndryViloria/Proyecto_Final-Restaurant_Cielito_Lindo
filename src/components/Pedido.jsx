import { Link } from "react-router-dom"

const Pedido = () => {
    return (
        <main>
            <h2>Detalle de compra</h2>

            <section className="cart">
                
                <div className="detalle-pedido">
                    <article className="pedido">
                        <img src="https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFjb3MlMjBtZXhpY2Fub3N8ZW58MHwxfDB8fA%3D%3D&auto=format&fit" alt="Imagen de tacos surtidos"></img>
                        <h3>Tacos Surtidos</h3>
                    </article>
                

                <article className="agregar-disminuir">
                <p> $ 10.490</p>
                        <button type="button"> - </button>
                        <span> 1 </span>
                        <button type="button"> + </button>
                </article>
                </div>
                
                    <div className="total_pagar">
                        <h4>Total: $ 10.490</h4>
                        {/* <button type="button">Ir a Pagar</button> */}
                    </div>
                

            </section>
        </main>
    )
}

export default Pedido
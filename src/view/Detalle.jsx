import { Link } from "react-router-dom"

const Detalle = ()=>{
    return (
        <main>
            <section className="detalle">

                <article className="img_detalle">
                <img src="https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFjb3MlMjBtZXhpY2Fub3N8ZW58MHwxfDB8fA%3D%3D&auto=format&fit" alt="Imagen de tacos surtidos"></img>
                </article>

                <article className="descrip_detalle">
                    <h3> Tacos Surtidos - $ 10.490</h3>
                    <p>El taco es una preparación culinaria muy popular de
                        México que consiste en una tortilla, generalmente de maíz,
                        que comúnmente se enrolla para contener dentro diversos
                        ingredientes y algún tipo de salsa. Es el antojo más
                        representativo de la cocina mexicana.</p>
                    <h4>Ingredientes:</h4>
                    <ul>
                        <li>Tostadas</li>
                        <li>Palta</li>
                        <li>Choclo</li>
                        <li>Poroto Negro</li>
                        <li>Carne, pollo y chorizo</li>
                        <li>Cilantro, cebolla y limón</li>
                    </ul>

                    <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>

                </article>
            </section>
        </main>
    )
}

export default Detalle
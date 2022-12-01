import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <main>
            <h1>Menú</h1>
    <section className="card">
        <article className="tarjeta">
            <img src="https://images.unsplash.com/photo-1511690078903-71dc5a49f5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGFjb3MlMjBtZXhpY2Fub3N8ZW58MHwxfDB8fA%3D%3D&auto=format&fit" alt="Imagen de tacos surtidos"></img>
            <h3>Tacos Surtidos</h3>
            <p> $ 10.490</p>
            <button type="button">Ver Más</button>
        </article>

        <article className="tarjeta">
            <img src="https://images.pexels.com/photos/12097599/pexels-photo-12097599.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Imagen de enchiladas"></img>
            <h3>Enchiladas</h3>
            <p> $ 11.990</p>
            <button type="button">Ver Más</button>
        </article>

        <article className="tarjeta">
            <img src="https://images.pexels.com/photos/12034452/pexels-photo-12034452.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Imagen de tortillas"></img>
            <h3>Tortillas</h3>
            <p> $ 9.990</p>
            <button type="button">Ver Más</button>
        </article>

        <article className="tarjeta">
            <img src="" alt="Imagen de tequila"></img>
            <h3>Tequila Jose Cuervo</h3>
            <p> $ 6.500</p>
            <button type="button">Ver Más</button>
        </article>

        <article className="tarjeta">
            <img src="" alt="Imagen de tequila margarita"></img>
            <h3>Tequila Margarita</h3>
            <p> $ 5.500</p>
            <button type="button">Ver Más</button>
        </article>

        <article className="tarjeta">
            <img src="" alt="Imagen de michelada"></img>
            <h3>Michelada</h3>
            <p> $ 4.500</p>
            <button type="button">Ver Más</button>
        </article>

    </section>
        </main>
    )
}

export default Menu
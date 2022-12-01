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
            <Link to="/detalle"><button type="button">Ver Más</button></Link>
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
            <img src="https://images.unsplash.com/photo-1516535794938-6063878f08cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="Imagen de tequila"></img>
            <h3>Tequila Jose Cuervo</h3>
            <p> $ 6.500</p>
            <button type="button">Ver Más</button>
        </article>

        <article className="tarjeta">
            <img src="https://www.culinaryhill.com/wp-content/uploads/2022/02/Margarita-Culinary-Hill-HR-04.jpg" alt="Imagen de tequila margarita"></img>
            <h3>Tequila Margarita</h3>
            <p> $ 5.500</p>
            <button type="button">Ver Más</button>
        </article>

        <article className="tarjeta">
            <img src="https://ep01.epimg.net/elcomidista/imagenes/2012/08/23/receta/1345698000_134569_1345698000_noticia_normal.jpg" alt="Imagen de michelada"></img>
            <h3>Michelada</h3>
            <p> $ 4.500</p>
            <button type="button">Ver Más</button>
        </article>

    </section>
        </main>
    )
}

export default Menu
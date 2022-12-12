import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom" //Hoot para leer los id de los productos de la pagina
import { useContext, useState, useEffect } from "react"
import Context from "../context/context.js"

import Ingredients from "../components/Ingredients.jsx"
import { formatearPrecio } from "../utilidades/utilidades.js"

const Detalle = () => {
    //1. capturar el id de los productos de la carta desde los parametros
    const { id } = useParams()

    //2. Traer el listado completo de los productos para despues ser filtrados
    const { carta, addToCarro } = useContext(Context)

    const [detalle, setDetalle] = useState({ingredients: [], price:0})

    useEffect(() => {
        const detalle = carta.filter((item) => item.id === id)
        setDetalle(detalle[0])
       
    }, [])

    return (
        <main>
            <h2>Detalle del producto</h2>
            <div className="detalle-vista">
                <section className="image" style={{backgroundImage: `url(${detalle.img})`}}>
                </section>

                <article className="content">
                    <h3>{detalle.name}</h3>
                   
                    <p className="desc">{detalle.desc}</p>

                    <Ingredients ingredients={detalle.ingredients}></Ingredients>

                    <div className="precio">
                        {/* <h3>Precio: ${detalle.price}</h3> */}

                        <h3>Precio: ${formatearPrecio(detalle.price)}</h3>

                        <div className="button">
                            <button className="button" onClick={() => addToCarro(detalle)}>Añadir <i className="fas fa-shopping-cart"></i></button>

                            <Link to="/Carta"><button>Volver a Carta</button></Link>
                        </div>
                    </div>
                </article>

            </div>
        </main>
    )
}

export default Detalle


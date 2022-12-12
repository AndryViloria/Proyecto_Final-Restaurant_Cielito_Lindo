import { useNavigate } from "react-router-dom"
import { useContext } from 'react'
import Context from '../context/context.js'
import { formatearPrecio } from '../utilidades/utilidades.js'
import { useState, useEffect } from "react";

const Carta = (e) => {
    const { carta, addToCarro } = useContext(Context)
    const navigate = useNavigate()

    const detalleCarta = (id) => navigate(`/detalle/${id}`)

    const [filtro, setFiltro] = useState("Todos");
    const [cartaMostrada, setCartaMostrada] = useState(carta);

    useEffect(() => {
        if (filtro === "Todos") {
            setCartaMostrada(carta);
        } else if (filtro === "Comidas") {
            const comidas = carta.filter((producto) => {
                if (producto.type === "Comidas") {
                    return true;
                } else {
                    return false;
                }
            });
            setCartaMostrada(comidas);
        } else {
            //hacer filtro de carta que devuelva los liquidos y guardar los liquidos en carta mostrada
            const tragos = carta.filter((producto) => {
                if (producto.type === "Tragos") {
                    return true;
                } else {
                    return false;
                }
            })
            setCartaMostrada(tragos)
        }
    }, [filtro]);

    const filtrar = (e) => {
        setFiltro(e.target.value);
    };

    return (
        <main>
            <h2>Carta</h2>
            <div className="select">
                <select className="categoria"
                    onChange={(e) => filtrar(e)}
                    defaultValue="Todos"
                >
                    <option>Todos</option>
                    <option>Comidas</option>
                    <option>Tragos</option>
                </select>
            </div>
            <section className="card">
                {
                    cartaMostrada.map((item) => {
                        return (<article key={item.id} className="tarjeta">
                            <img src={item.img} alt="Imagen de tacos surtidos"></img>
                            <h3>{item.name}</h3>
                            <p> $ {formatearPrecio(item.price)}</p>
                            <div className="botones-menu">
                                <button type="button" onClick={() => detalleCarta(item.id)}>Ver Más <i class="fas fa-laugh"></i></button>
                                <button type="button" className="agregar-carro" onClick={() => addToCarro(item)}>Añadir <i className="fas fa-shopping-cart"></i></button>
                            </div>
                        </article>)
                    }
                    )
                }
            </section>
        </main>
    )
}

export default Carta
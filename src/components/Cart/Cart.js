import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import "./Cart.css"

const Cart = () =>{

    const { cart, removeItem, total } = useContext(CartContext)

    return(
        <div id="carrito">
            <h1 className="carritoEstilo">Carrito de compras</h1>
            {
                cart.map(prod => (
                    <div>
                        <p>{prod.name}  <button id="botonRemover" onClick={() => removeItem(prod.id)}>Remover</button>  </p>
                        <p>Cantidad: {prod.quantity}</p>  
                    </div>
                     
                ))

            }
            <div>
                <h2 className="precioTotal">Precio total: {total}</h2>
                <button id="botonComprarP"> Comprar </button>
                <Link to={'/products'}>
                <p className="letritas">o</p>
                <p className="letritas">Comprar mas productos</p>
                </Link>
            </div>
        </div>
        
    )
}

export default Cart
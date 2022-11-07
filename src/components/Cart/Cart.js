import { useContext } from "react"
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
                <button> Comprar productos </button>
            </div>
        </div>
        
    )
}

export default Cart
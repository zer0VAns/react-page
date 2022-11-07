import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../../App"
import Counter from "../ItemCounter/ItemCounter"
import { CartContext } from "../Context/CartContext"
import { NotificacionContext } from "../../notificacion/NotificacionProvider"
import { Link } from "react-router-dom"
 const ItemDetail = ({id,name,price,category,img,stock,description}) =>{
    const navigate = useNavigate()
    const {addItem, isInCart, getProductQuantity} = useContext(CartContext)
    const { setNotificacion } = useContext(NotificacionContext)

    const onAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, stock
        }
        addItem(productToAdd, quantity)
        setNotificacion('success', `Se agrego correctamente ${quantity} ${name}`)
        //console.log(productToAdd)
    }
    const quantityAdded = getProductQuantity(id)
    return (
        <div id="itemDetail">
            <img src={img} alt={name} style={{width:100}}/>
            <h2 id="nombreDetalle">{name}</h2>
            <p className="textoDetalle sizeTexto">Precio: ${price}</p>
            <p className="textoDetalle sizeTexto">{description}</p>
            <p className="textoDetalle sizeTexto">Stock: {stock} unidades</p>
            <button onClick={() => navigate(`/products`)} className="botonVerDetalle">Volver</button>
            { 
            !isInCart(id)
                ?
            <Counter onAdd={onAdd} stock={stock} initial={quantityAdded} />
            : <Link to='/cart' className='Option'>Finalizar compra</Link>

            }
        </div>
    )
}

export default ItemDetail
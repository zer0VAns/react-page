import Item from "../Item/Item"
import "../styles/ItemList.css"

const ItemList = ({ productos }) => { 
    return (
    <div className="productos" id="productosLista">
        {productos.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
    )
}

export default ItemList
import { useNavigate } from "react-router-dom"

const ItemDetail = ({id,name,price,category,img,stock,description}) =>{
    const navigate = useNavigate()
    return (
        <div>
            <img src={img} alt={name} style={{width:100}}/>
            <h2 id="nombreDetalle">{name}</h2>
            <p className="textoDetalle sizeTexto">Precio: ${price}</p>
            <p className="textoDetalle sizeTexto">Descripcion: {description}</p>
            <p className="textoDetalle sizeTexto">Stock: {stock} unidades</p>
            <button onClick={() => navigate(`/products`)} className="botonVerDetalle">Volver</button>
        </div>
    )
}

export default ItemDetail
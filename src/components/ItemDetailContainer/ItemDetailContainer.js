import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "../styles/ItemDetail.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const {productid} = useParams()

    useEffect(() => {
        getProductById(productid)
        .then(product =>{
            setProduct(product)
        })
    }
    , [])
    return (
        <div className="detallesProducto">
        <h1 id="tituloDetalle">Detalles del producto</h1>
        <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer
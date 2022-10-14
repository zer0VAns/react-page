import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

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
        <>
        <h1>Detalle de producto</h1>
        <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer
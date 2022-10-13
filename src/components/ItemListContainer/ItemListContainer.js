import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer =() => {
    const [productos, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        getProducts().then(response => {
            console.log(response)
            setProducts(response)
        }).finally(() => {
            setLoading(false)
        })

    }, [])

    // console.log(productos)
    // const productsMapped = productos.map(prod => <li key={prod.id} style={{color:"red"}}>{prod.name}</li>)
    // console.log(productsMapped)

if(loading){
    return <h1>Loading...</h1>

}
   
    return(
        <div>
            <h1>Listado de productos</h1>
            {/* { productsMapped }
         FORMA 2: products.map (prod => <li style={{color:"red"}}>{prod.name} </li>) */}
         <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer
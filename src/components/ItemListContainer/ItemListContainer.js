import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "../styles/ItemList.css"

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


if(loading){
    return <h1>Loading...</h1>

}
   
        return(
        <div className="productos background-productos">
            <h1 id="listado">Nuestros productos</h1>
         <ItemList productos={productos}/>

        </div>      
    )
}
export default ItemListContainer
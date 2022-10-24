import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "../styles/ItemList.css"

const Products =() => {
    const [productos, setProducts] = useState([])
    useEffect (() => {
        getProducts().then(response => {
            console.log(response)
            setProducts(response)
        })
    }, [])
        return(
        <div className="productos background-productos">
            <h1 id="listado">Nuestros productos</h1>
         <ItemList productos={productos}/>

        </div>      
    )
}
export default Products
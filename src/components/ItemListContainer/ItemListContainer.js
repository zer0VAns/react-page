import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import "../styles/ItemList.css"

 const ItemListContainer =() => {
    const [productos, setProducts] = useState([])
    const { categoryId } = useParams()
    console.log(categoryId)

     useEffect (() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
         asyncFunction(categoryId)
         .then(productos => {
             setProducts(productos)
       })
     }, [categoryId])
         return(
         <div className="productos background-productos">
             <h1 id="listado">Nuestros productos</h1>
          <ItemList productos={productos}/>

         </div>)
 }
  
export default ItemListContainer

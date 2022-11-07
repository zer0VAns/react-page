import { useState } from 'react'
import "./ItemCounter.css"
const Counter = ({stock, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }

   return(
       <div >          
            <div className="countID">
                <button className="botonVerDetalle botonCounter botones" onClick={decrement}>-</button>
                <h4 className='cantidad botones'>{quantity}</h4>
                <button className="botonVerDetalle botonCounter botones"  onClick={increment}>+</button>


                <button className="botonCounter botonAgregar" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
                </div>
       </div>
   )
   }
   
export default Counter
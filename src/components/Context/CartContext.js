import { createContext, useEffect } from "react"
import { useState } from "react"
export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
}
)

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState([0])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
        // eslint-disable-next-line
    }, [cart])

        useEffect(() => {
        const total = getTotal()
        setTotal(total)
        // eslint-disable-next-line
      }, [cart])

    const addItem = (productToAdd, quantity) => {
        if (!isInCart(productToAdd.id)) {
            productToAdd.quantity = quantity
            setCart([...cart, productToAdd])
        } 
}

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        })                
         return accu
    }

    const getTotal = () => {
        let accuc = 0
        cart.forEach(prod => {
            accuc = (accuc + prod.quantity) * prod.price
        })
        return accuc
    }
    console.log(total)
    console.log(getTotal)
    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }
    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity, isInCart, total, clearCart, getProductQuantity, removeItem, getTotal  }}>
            {children}
        </CartContext.Provider>
    )
}
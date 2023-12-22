import { useEffect, useState } from "react"

const CART = "cart"

export function useCart() {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const oldCart = localStorage.getItem(CART)
        if (oldCart != "" && oldCart != null) {
            setCart(JSON.parse(oldCart))
        } else {
            localStorage.setItem(CART, "[]")
        }
    }, [])
    

    const addToCart = (id) =>{
        localStorage.setItem(CART, JSON.stringify(cart.concat(id)))
        setCart(cart.concat(id))
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((e) => {return e != id})
        setCart(newCart)
        localStorage.setItem(CART, JSON.stringify(newCart))
    }

    const emptyCart = () => {
        localStorage.setItem(CART, "[]")
        setCart([])
    }

    const isInCart = (id) => {
        return cart.includes(id)
    }

    const handleCart = (id) => {
        if (isInCart(id)) {removeFromCart(id)}
        else {addToCart(id)}
    }

    return {handleCart, emptyCart, isInCart}
}
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";



export const StoreContext = createContext()

const StoreContextProvider = (props) => {

    const[cartItems, setCartItems] = useState({})

    const addCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
        } else {
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item]>0) {
                let itemInfo = food_list.find((product)=>product.id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }


    const contextValue ={
        food_list,
        cartItems,
        setCartItems,
        addCart,
        removeCart,
        getTotalAmount
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider
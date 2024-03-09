import React, { useState } from "react";
import all_product from "../Comp/Assets/all_product";
import { createContext } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());


    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItem);
    };

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    // console.log(cartItem);

    const contextValue = { all_product, cartItem, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;

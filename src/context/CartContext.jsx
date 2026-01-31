import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { toast } from "react-toastify";

const cartInitialState = {
    cartList : JSON.parse(sessionStorage.getItem("cart") || "[]"),
    total : JSON.parse(sessionStorage.getItem("carttotal") || "0")
}

export const CartContext = createContext(cartInitialState);

// Provider

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    useEffect(() => {
        sessionStorage.setItem("cart",JSON.stringify(state.cartList));
        sessionStorage.setItem("carttotal", JSON.stringify(state.total));
    },[state.cartList, state.total])

    const addToCart = (product) =>{
        const updateCart = state.cartList.concat(product)
         // total price after add
        const updateTotal = state.total + product.price;
            dispatch({
                type: "ADD_TO_CART",
                payload : {
                products: updateCart,
                total: updateTotal
                }
            })
            toast.success("Product added in your cart");
     
    };
    // Remove to cart
      const removeToCart = (product) =>{
        const updateCart = state.cartList.filter(currentItem => currentItem.id !== product.id);
        // total price after remove
          const updateTotal = state.total - product.price;
            dispatch({
                type: "REMOVE_FROM_CART",
                payload : {
                products: updateCart,
                total: updateTotal
                }
            })
    };
    // Clear Cart
    const clearCart = () =>{
        dispatch({
            type:"CLEAR_CART", 
            payload : {
                products : [],
                total : 0,
            }
        })
    }
    // Product total
     
    const value = {
        total:state.total,
        cartList: state.cartList,
        addToCart,
        removeToCart,
        clearCart
    }

    return (
            <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
        )
};

// Consumer
export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}
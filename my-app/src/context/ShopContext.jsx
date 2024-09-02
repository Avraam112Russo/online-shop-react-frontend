import {createContext, useEffect, useState} from "react";
import {products} from "../assets/frontend_assets/assets.js"
import login from "../pages/Login.jsx";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = "$"
    const delivery_fee = 15;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();
    const addItemToCart = async (productId, size) => {
        if (!size){
            toast.error('Выберите размер')
            return;
        }
        let cartData = structuredClone(cartItems)
        if (cartData[productId]){
            if (cartData[productId][size]){
                cartData[productId][size] += 1;
            }else {
                cartData[productId][size] = 1;
            }
        } else {
            cartData[productId] = {};
            cartData[productId][size] = 1;
        }
         setCartItems(cartData);
    }
   const getCartItemsCount = () => {
        let totalCount = 0;
            for (const items in cartItems){
                for(const item in cartItems[items]){
                    try{
                        if (cartItems[items][item] > 0){
                            totalCount += cartItems[items][item]
                        }
                    }catch (error){
                        console.log("Error while getCartItemsCount ")
                    }
                }
            }
            return totalCount;
   }
   const updateQuantity = (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
   }
   const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems){
            let itemInfo = products.find(product => product._id === items);
            for (const item in cartItems[items]){
                try {
                    totalAmount += itemInfo.price * cartItems[items][item]
                }catch (error){
                    console.log("Error while getCartAmount ")
                }
            }
        }
        return totalAmount;
   }
    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addItemToCart,
        getCartItemsCount, updateQuantity, getCartAmount,
        navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
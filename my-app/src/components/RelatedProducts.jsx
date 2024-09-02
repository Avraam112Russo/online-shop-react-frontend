import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import {products} from "../assets/frontend_assets/assets.js";
import product from "../pages/Product.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const RelatedProducts = ({category, subCategory}) => {
    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState([]);
    useEffect(() => {
        if (products.length > 0){
            let productsCopy = products.slice();
            productsCopy = products.filter(item => category === item.category);
            productsCopy = products.filter(item => subCategory === item.subCategory);
            setRelated(productsCopy.slice(0,5))
        }
    }, []);
    return (
        <div className="my-24">
            <div className="text-center text-3xl py-2">
                <Title text_1={"ПОХОЖИЕ "} text_2={"ТОВАРЫ"}/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {related.map((item, index) => (
                    <ProductItem
                    key={index}
                    price={item.price}
                    image={item.image}
                    id={item._id}
                    name={item.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
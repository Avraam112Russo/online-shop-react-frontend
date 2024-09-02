import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const LatestCollection = () => {
        const {products} = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])
    useEffect(() => {
        setLatestProducts(products.slice(0,10)) // set only 10 products in state
    }, []);
    return (
        <div className="my-10">
           <div className="text-center py-8 text-3xl">
            <Title text_1={"НОВАЯ "} text_2={"КОЛЛЕКЦИЯ"}/>
               <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. At excepturi in molestiae nam, quasi ut. Assumenda facilis laborum quibusdam voluptatem. 
               </p>
           </div>
            {/*rendering products*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-5">
                {
                    latestProducts.map((product, index) => (
                        <ProductItem
                            key={index}
                            id={product._id} price={product.price} name={product.name} image={product.image}/>
                    ))
                }
            </div>
        </div>
    );
};

export default LatestCollection;
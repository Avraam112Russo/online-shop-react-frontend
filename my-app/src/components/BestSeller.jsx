import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller, setBestseller] = useState([])
    useEffect(() => {
        const bestProducts = products.filter((product) => product.bestseller === true)
        setBestseller(bestProducts.slice(0, 5))
    }, []);

    return (
        <div className="my-10">
            <div className="text-center text-3xl py-8">
            <Title text_1={"BEST "} text_2={"SELLERS"}/>
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto debitis delectus dicta doloremque doloribus ducimus eaque exercitationem non quis?
                </p>
            </div>


                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                    {bestSeller.map((product) => (
                        <ProductItem
                            key={product._id}
                        id={product._id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        />
                    ))}
                </div>


        </div>
    );
};

export default BestSeller;
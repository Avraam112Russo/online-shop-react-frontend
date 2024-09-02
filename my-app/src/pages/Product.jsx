import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ShopContext} from "../context/ShopContext.jsx";
import {assets} from "../assets/frontend_assets/assets.js";
import star_icon from "../assets/frontend_assets/star_icon.png";
import RelatedProducts from "../components/RelatedProducts.jsx";

const Product = () => {
    const {productId} = useParams();
    const {products, currency, addItemToCart} = useContext(ShopContext)
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState("")
    const [size, setSize] = useState('')
    const fetchProductData = async () => {
        products.map((product) => {
            if (product._id === productId) {
                setProductData(product);
                setImage(product.image[0])
                console.log(product)
                return null;
            }
        })
    };
    useEffect(() => {
        fetchProductData();
    }, [productId, products]);
    return productData ?(
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/*Product data*/}
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
            {/*Product Image*/}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {
                            productData.image.map((image, index) => (
                                <img onClick={() => setImage(image)} src={image} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"/>
                            ))
                        }
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img src={image} alt="" className="w-full object-contain h-1/2  ..."/>
                    </div>
                </div>
                {/* product info*/}
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img className={"w-3 5"} src={assets.star_icon} alt=""/>
                        <img className={"w-3 5"} src={assets.star_icon} alt=""/>
                        <img className={"w-3 5"} src={assets.star_icon} alt=""/>
                        <img className={"w-3 5"} src={assets.star_icon} alt=""/>
                        <img className={"w-3 5"} src={assets.star_icon} alt=""/>
                        <p>(122)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
                    <p className="mt-5 text-gray-500">{productData.description}</p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Выберите размер: </p>
                        <div className="flex gap-2">
                            {productData.sizes.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                                    key={index}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={() => addItemToCart(productData._id, size)}
                        className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">Добавить в корзину</button>
                    <hr className="mt-8 sm:w-4/5 "/>
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>Только 100% оригинал</p>
                        <p>Доставка от 7 до 19 дней</p>
                        <p>Обмен и возврат доступен в течение 14 дней</p>
                    </div>
                </div>
            </div>
            {/* description & review section*/}
            <div className="mt-20">
                <div className="flex">
                    <b className="border px-5 py-3 text-sm">
                        Описание
                    </b>
                    <p className="border px-5 py-3 text-sm">Отзывы (122)</p>
                </div>
                <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque error fugiat magni molestiae numquam perferendis praesentium suscipit? Ad, id.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam eveniet impedit laboriosam obcaecati officia quam quisquam quo, quos repellendus. Alias assumenda aut culpa facere rem similique temporibus vero voluptatum.</p>
                </div>
            </div>
            {/*display related products*/}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
        </div>
    ) : <div className="opacity-0"></div>;
};

export default Product;
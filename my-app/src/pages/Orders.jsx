import React, {useContext} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import Title from "../components/Title.jsx";

const Orders = () => {
    const {products, currency} = useContext(ShopContext);
    const [readyForShip, setReadyForShip] = React.useState(false);
    return (
        <div className="border-t pt-16">
            <div className="text-2xl">
                <Title text_1={"МОИ "}text_2={"ЗАКАЗЫ"}/>
            </div>
            <div>
                {
                    products.slice(1,4).map((item, index) => (
                        <div key={index} className="pt-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-start gap-6 text-sm">
                                <img src={item.image[0]} className="w-16 sm:w-20" alt={""}/>
                                <div>
                                    <p className="sm:text-base font-medium">{item.name}</p>
                                    <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                                        <p>{currency}{item.price}</p>
                                        <p>Количество: 1</p>
                                        <p>Размер: M</p>
                                    </div>
                                    <p>Date: <span className="text-gray-400">30.08.2024</span></p>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-between">
                                <div className="flex items-center gap-2">
                                    <p className={`min-w-2 h-2 rounded-full ${readyForShip === true ? "bg-green-500" : "bg-black opacity-50"}`}>
                                    </p>
                                    <p>
                                        {readyForShip === true ? "Готов к отправке" : "Ожидает отправки"}
                                    </p>
                                </div>
                                <button className="border px-4 py-2 text-sm font-medium rounded-sm">Отследить заказ.</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Orders;
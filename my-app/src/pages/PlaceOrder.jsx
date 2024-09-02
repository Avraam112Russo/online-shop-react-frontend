import React, {useEffect} from 'react';
import Title from "../components/Title.jsx";
import CartTotal from "../components/CartTotal.jsx";
import {assets} from "../assets/frontend_assets/assets.js";
import {useNavigate} from "react-router-dom";

const PlaceOrder = () => {
    const [paymentMethod, setPaymentMethod] = React.useState('cod'); // cod -> cash on delivery
    const [readyForShip, setReadyForShip] = React.useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (paymentMethod){
            console.log(paymentMethod)
        }
    }, [paymentMethod]);
    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
            {/*left side*/}
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title text_1={"ИНФОРМАЦИЯ "} text_2={"О ДОСТАВКЕ"}/>
                </div>
                <div className="flex gap-3">
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        type="text" placeholder={"Ваше имя"}/>
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        type="text" placeholder={"Ваша фамилия"}/>
                </div>
                <input
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    type="email" placeholder={"email"}/>
                <input
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    type="text" placeholder={"Город"}/>
                <div className="flex gap-3">
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        type="text" placeholder={"Улица"}/>
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        type="text" placeholder={"Дом"}/>
                </div>
                <div className="flex gap-3">
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        type="text" placeholder={"Квартира"}/>
                    <input
                        className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                        type="number" placeholder={"Индекс"}/>
                </div>
                <input
                    className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
                    type="number" placeholder={"Номер телефона"}/>
            </div>

            {/*right side*/}
                <div className="mt-8">


                    <div className="mt-8 min-w-80">
                        <CartTotal/>
                    </div>



                    <div className="mt-12">
                        <Title text_1={"СПОСОБ "} text_2={"ОПЛАТЫ"}/>
                        {/*payment method*/}
                        <div className="flex gap-3 flex-col lg:flex-row">
                            <div onClick={() => setPaymentMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'stripe' ? 'bg-green-400' : ''}`}></p>
                                <img className="h-5 mx-4" src={assets.stripe_logo} alt=""/>
                            </div>

                            <div onClick={() => setPaymentMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                                <img className="h-5 mx-4" src={assets.razorpay_logo} alt=""/>
                            </div>

                            <div onClick={() => setPaymentMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === 'cod' ? 'bg-green-400' : ''}`}></p>
                               <p className="text-gray-500 text-sm font-medium mx-4">ОПЛАТА ПРИ ПОЛУЧЕНИИ</p>
                            </div>
                        </div>

                        <div className="w-full text-end mt-8">
                            <button
                                onClick={() => navigate("/orders")}
                                className="bg-black text-white px-16 py-3 text-sm">ОФОРМИТЬ ЗАКАЗ</button>
                        </div>

                    </div>




                </div>
        </div>
    );
};

export default PlaceOrder;
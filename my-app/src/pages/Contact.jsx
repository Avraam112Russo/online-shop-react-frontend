import React from 'react';
import Title from "../components/Title.jsx";
import {assets} from "../assets/frontend_assets/assets.js";
import NewsletterBox from "../components/NewsletterBox.jsx";

const Contact = () => {
    return (
        <div>
            <div className="text-center text-2xl pt-10 border-t">
                <Title text_1={"НАШИ "} text_2={"КОНТАКТЫ"}/>
            </div>
            <div className="my-10 mb-28 flex flex-col justify-center md:flex-row gap-10">
                <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt=""/>
                <div className="flex flex-col justify-center items-start gap-6">
                    <p className="font-semibold text-xl text-gray-600">Работаем ежедневно с 10 до 22</p>
                    <p className="text-gray-500">Россия, Г.Москва <br/> Ул. новый арбат, д23</p>
                    <p className="text-gray-500">Telegram: @forever_shop <br/>Whatsapp: +7 (977) 123 45 67</p>
                    <p className="text-gray-500">Email: forever@gmail.com </p>
                    <p className="font-semibold text-xl text-gray-600">Перейти в телеграм канал</p>
                    <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
                        TELEGRAM
                    </button>


                </div>
            </div>
            <NewsletterBox/>
        </div>

)
    ;
};

export default Contact;
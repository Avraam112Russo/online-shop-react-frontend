import React from 'react';
import {assets} from "../assets/frontend_assets/assets.js";
const OurPolicy = () => {
    return (
        <div
            className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
            <div>
                <img
                    className="w-12 m-auto mb-5"
                    src={assets.exchange_icon} alt=""/>
                <p className="font-semibold">Правила обмена и возврата</p>
                <p className="text-gray-400">Мы предлагаем бесплатный возврат или обмен товара.</p>
            </div>

            <div>
                <img
                    className="w-12 m-auto mb-5"
                    src={assets.quality_icon} alt=""/>
                <p className="font-semibold">Гарантия качества</p>
                <p className="text-gray-400">Мы предоставляем гарантию качества на 365 дней.</p>
            </div>


            <div>
                <img
                    className="w-12 m-auto mb-5"
                    src={assets.support_img} alt=""/>
                <p className="font-semibold">Поддержка 24/7</p>
                <p className="text-gray-400">Обращайтесь к нашему менеджеру по любым интересующим вас вопросом </p>
            </div>
        </div>
    );
};

export default OurPolicy;
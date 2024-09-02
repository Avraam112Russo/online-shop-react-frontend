import React from 'react';
import {assets} from "../assets/frontend_assets/assets.js";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
                <div>
                    <img className="mb-5 w-32" src={assets.logo} alt=""/>
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque consequatur culpa
                        error et, excepturi hic inventore nobis numquam quas quasi quidem quis quisquam rem soluta!
                        Libero necessitatibus rerum similique?
                    </p>
                </div>

                <div>
                    <p className="text-xl font-medium mb-5">
                        COMPANY
                    </p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>О нас</li>
                        <li>Доставка</li>
                        <li>Бонусы</li>
                        <li>Часто задаваемые вопросы</li>
                    </ul>
                </div>


                <div>
                    <p className="text-xl font-medium mb-5">Контакты</p>
                    <ul className="">
                        <li>+7-977-999-34-73</li>
                        <li>@forever_young</li>
                        <li>avraam112russo@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
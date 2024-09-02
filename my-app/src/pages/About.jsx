import React from 'react';
import Title from "../components/Title.jsx";
import {assets} from "../assets/frontend_assets/assets.js";
import NewsletterBox from "../components/NewsletterBox.jsx";

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text_1={"ИНФОРМАЦИЯ "} text_2={"О НАС"}/>
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className="w-full md:max-w-[450px]" src={assets.about_img} alt=""/>
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos facilis, ipsa iste iure natus saepe.
                        Aliquid, amet commodi cumque modi natus quae quasi! Enim error id mollitia obcaecati repellat veniam voluptatum.
                        Amet beatae, corporis cumque dolorem error, id illo itaque iure molestiae nam nisi nulla repellat suscipit! Molestias, possimus, saepe.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, beatae cumque eveniet ipsa quod saepe veniam? Ea, iste libero magni porro praesentium qui, quod reiciendis sit suscipit tempore unde, voluptatum.</p>
                    <b className="text-gray-800">Наша миссия</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate explicabo hic labore nam ullam ut. Blanditiis doloremque dolorum exercitationem!</p>
                </div>
            </div>
            <div className="text-4xl py-4">
                <Title text_1={"ПОЧЕМУ "} text_2={"ИМЕННО МЫ?"}/>
            </div>
            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>ТОЛЬКО ОРИГИНАЛЬНЫЕ ТОВАРЫ</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad amet aspernatur atque eos hic
                        ipsum iste laboriosam laborum minima natus, odit optio placeat provident quibusdam quidem
                        repudiandae unde voluptas?</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>ГАРАНТИЯ КАЧЕСТВА</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur dolores
                        inventore natus, officia porro quibusdam repudiandae sapiente soluta vel.</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>БЫСТРАЯ ДОСТАВКА</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae hic in ullam voluptates! Ad atque culpa, ipsam iusto quam quia quibusdam reiciendis repellendus totam.</p>
                </div>
            </div>
            <NewsletterBox/>
        </div>
    );
};

export default About;
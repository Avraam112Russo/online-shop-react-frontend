import React, {useContext, useEffect, useState} from 'react';
import {ShopContext} from "../context/ShopContext.jsx";
import {assets} from "../assets/frontend_assets/assets.js";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";

const Collection = () => {
    const {products, search, showSearch} = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [sortType, setSortType] = useState('relevant') ;
    const onChangeCategory = (event) => {
        if (category.includes(event.target.value)) {
            setCategory(prevState => prevState.filter(item => item !== event.target.value))
        }
        else {
            setCategory(prevState => [...prevState, event.target.value])
        }
    }
    const onChangeSubCategory = (event) => {
        if (subCategory.includes(event.target.value)) {
            setSubCategory(prevState => prevState.filter(item => item !== event.target.value))
        }
        else {
            setSubCategory(prevState => [...prevState, event.target.value])
        }
    }
    // useEffect(() => {
    //     setFilterProducts(products)
    // }, [filterProducts])
    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch])
    useEffect(() => {
        sortProducts();
    }, [sortType])

    const applyFilter = () => {
        let copyProducts = products.slice();
        if (showSearch && search){
            copyProducts = copyProducts.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length > 0){
            copyProducts = products.filter(product => category.includes(product.category))
        }
        if (subCategory.length > 0){
            copyProducts = products.filter(product => subCategory.includes(product.subCategory))
        }
        setFilterProducts(copyProducts);
    }
    const sortProducts = () => {
        let fpCopy = filterProducts.slice();

        switch (sortType){
            case "low-high" :
                setFilterProducts(fpCopy.sort((product_1, product_2) => product_1.price - product_2.price))
                break;
            case "high-low" :
                setFilterProducts(fpCopy.sort((product_1, product_2) => product_2.price - product_1.price))
                break;
            default :
                applyFilter();
        }
    }



    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">

            {/*filter options*/}

            <div className="min-w-60">
                <p
                    onClick={()=> setShowFilter(!showFilter)}
                    className="my-2 text-xl flex items-center cursor-pointer gap-2">
                    ФИЛБТР
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon}
                         alt=""/>
                </p>

                {/*category filters*/}
                <div
                    className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter === true ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">TYPES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Men"} onChange={onChangeCategory}/> Мужчины
                        </p>

                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Women"} onChange={onChangeCategory}/> Женщины
                        </p>

                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Kids"} onChange={onChangeCategory}/> Дети
                        </p>
                    </div>
                </div>
                {/*subcategory filter*/}
                <div
                    className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter === true ? '' : 'hidden'} sm:block`}>
                    <p className="mb-3 text-sm font-medium">КАТЕГОРИИ</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Topwear"} onChange={onChangeSubCategory}/> Футболки
                        </p>

                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"shirt"} onChange={onChangeSubCategory}/> Рубашки
                        </p>

                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"Winterwear"} onChange={onChangeSubCategory}/> Winterwear
                        </p>

                        <p className="flex gap-2">
                            <input className="w-3" type="checkbox" value={"accessories"}/> Аксессуары
                        </p>
                    </div>
                </div>
            </div>
            {/*right side*/}

            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text_1={"ВСЕ "} text_2={"КАТЕГОРИИ"}/>
                    {/*products sort*/}
                    <select
                        onChange={(event) => setSortType(event.target.value)}
                        className="border-2 border-gray-300 text-sm px-2"
                        name=""
                        id=""
                    >
                        <option value="relevant">Сортировать по: релевантности</option>
                        <option value="low-high">Сортировать по: возрастанию</option>
                        <option value="high-low">Сортировать по: убыванию</option>
                    </select>
                </div>
                {/*map products*/}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {
                        filterProducts.map((product, index) => (
                            <ProductItem
                            key={index}
                            name={product.name}
                            image={product.image}
                            id={product._id}
                            price={product.price}
                            />
                        ))
                    }
                </div>
            </div>


        </div>
    );
};

export default Collection;
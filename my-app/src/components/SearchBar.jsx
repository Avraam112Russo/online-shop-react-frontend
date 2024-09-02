import React, {useContext, useEffect, useState} from 'react';
import  {ShopContext} from "../context/ShopContext.jsx";
import {assets} from "../assets/frontend_assets/assets.js";
import {useLocation} from "react-router-dom";

const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const location = useLocation();
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (location.pathname.includes("/collection")){
            setVisible(true);
        }else {
            setVisible(false)
        }
    }, [location])
    const onChangeSearch = (event) => {
        setSearch(event.target.value)
    }
    return showSearch && visible === true ? (
        <div className="border-t border-b text-gray-50 text-center">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 rounded-full w-3/4 sm:w-1/2">
                <input
                    type="text"
                    placeholder={"Поиск"}
                    className="flex-1 outline-none bg-inherit text-sm"
                    value={search}
                    onChange={onChangeSearch}
                />
                <img src={assets.search_icon} alt="" className="w-4"/>
            </div>
            <img src={assets.cross_icon}
                 className="inline w-3 cursor-pointer ml-4"
                 alt=""
                 onClick={() => setShowSearch(false)}
            />
            
        </div>
    )
        : null;
};

export default SearchBar;
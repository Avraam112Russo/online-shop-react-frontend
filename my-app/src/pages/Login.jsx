import React, {useState} from 'react';

const Login = () => {
    const [currentState, setCurrentState] = useState("Login")
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
                <p className="prata-regular text-3xl">{currentState}</p>
                <hr className="border-none h-[1.5px] w-8 bg-gray-800"/>
            </div>
            {currentState === 'Login' ? '' :
                <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder={"Имя"}
                       required={true}/>}
            <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder={"email"} required={true}/>
            <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder={"Пароль"} required={true}/>
            <div className="w-full flex justify-between text-sm mt-[-8px] ">
                <p className="cursor-pointer">Забыли ваш пароль?</p>
                {currentState === "Login" ?
                <p className="cursor-pointer" onClick={() => setCurrentState("Sign up")}>Регистрация</p>
                    :
                    <p className="cursor-pointer" onClick={() => setCurrentState('Login')}>Войти</p>
                }
            </div>
            <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState === 'Login' ? 'Войти' : 'Регистрация'}</button>
        </form>
    );
}

export default Login;
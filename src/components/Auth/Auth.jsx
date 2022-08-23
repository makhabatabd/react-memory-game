import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Auth.css"

const Auth = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate();
    function checkName() {
        if (name) {
            navigate("/game")
            localStorage.setItem("user", name)
        } 
    }
    return (
        <div className='main-auth'>
            <div className="container">
                <div className='auth__inner'>
                     <form className="end__form-container">
                    <h2 className='auth__text'>Enter your name below to save your results and start a game!</h2>
                        <input onChange={(e) => setName(e.target.value)} className="username" type="text" placeholder="Enter your name" />
                    </form>
                    {name ? <button type="button" onClick={()=>checkName()} className="btn">Start</button> : <button type="button" className="btn">Waiting to start</button>}
               </div>
            </div>
        </div>
    );
};

export default Auth;
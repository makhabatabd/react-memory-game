import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../authContext';
import "./Auth.css"

const Auth = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate();
    const {mode, setMode} = useContext(authContext)
    function checkName() {
        if (name) {
            navigate("/game")
            localStorage.setItem("user", name)
        } 
    }

    const handleChange = (event) => {
    setMode(event.target.value)
  }

    return (
        <div className='main-auth'>
            <div className="container">
                <div className='auth__inner'>
                     <form className="end__form-container">
                    <h2 className='auth__text'>Enter your name below to save your results and start a game!</h2>
                        <input onChange={(e) => setName(e.target.value)} className="username" type="text" placeholder="Enter your name" />
                    </form>
                    <p className='mode-chooser'>Choose your mode:</p>
                    <div className="wrapper">
                        <input type="radio" value="normal"
                            checked={mode === 'normal'}
                            onChange={handleChange}
                            name="select" id="option-1"/>
                        <input type="radio" value="pro"
                            checked={mode === 'pro'}
                            onChange={handleChange}
                            name="select"
                            id="option-2" />
                        <label htmlFor="option-1" className="option option-1">
                            <div className="dot"></div>
                            <span>Normal</span>
                            </label>
                        <label htmlFor="option-2" className="option option-2">
                            <div className="dot"></div>
                            <span>Pro</span>
                        </label>
                    </div>
                    {name ? <button type="button" onClick={() => checkName()} className="btn">Start</button> : <button type="button" className="btn">Waiting to start</button>}
                    <Link to={'/rules'}>
                    <button className='btn'>Learn the rules</button>
                    </Link>
               </div>
            </div>
        </div>
    );
};

export default Auth;
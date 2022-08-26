import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../authContext';
import { getCards } from '../helpers';
import "./LeaderBoard.css"

const LeaderBoard = () => {
    const gameScore = JSON.parse(localStorage.getItem("gameScore")) || [];
    const { board, setBoard } = useContext(authContext)
    const proScore = JSON.parse(localStorage.getItem("proScore")) || [];
    const { mode } = useContext(authContext);
     let scoreArray = []
      if (mode === "normal") {
        scoreArray = [...gameScore]
    } else if(mode === "pro") {
        scoreArray = [...proScore]
    }
    if (board === "normal") {
        scoreArray.sort((a, b) => a.score - b.score);
    } else if (board === "seconds") {
        scoreArray.sort((a, b) => a.time - b.time);
    } else if (board === "moves") {
        scoreArray.sort((a, b) => a.moves - b.moves);
    }

    const handleChange = (event) => {
        setBoard(event.target.value)
    }
    return (
        <div className="container">
            <div id="high-scores">
                <h1 id="final-score">LeaderBoard:</h1>
                <h3 className='board-chooser'>Choose your board to check:</h3>
                <div className="wrapper leader-wrapper">
                        <input type="radio" value="normal"
                            checked={board === 'normal'}
                            onChange={handleChange}
                            name="select" id="option-1"/>
                        <input type="radio" value="seconds"
                            checked={board === 'seconds'}
                            onChange={handleChange}
                            name="select"
                        id="option-2" />
                    <input type="radio" value="moves"
                            checked={board === 'moves'}
                            onChange={handleChange}
                            name="select"
                            id="option-3" />
                        <label htmlFor="option-1" className="option option-1">
                            <div className="dot"></div>
                            <span>Score</span>
                            </label>
                        <label htmlFor="option-2" className="option option-2">
                            <div className="dot"></div>
                            <span>Seconds</span>
                    </label>
                     <label htmlFor="option-3" className="option option-3">
                            <div className="dot"></div>
                            <span>Moves</span>
                        </label>
                </div>
                <ul id="high-scores-list">
                    {board === "normal" ? scoreArray.map((item, index) => {
                        return <li key={index} className='high-score'>{item.name} - {item.score}</li>
                    }) : board === "seconds" ? scoreArray.map((item, index) => {
                        return <li key={index} className='high-score'>{item.name} - {item.time}</li>
                    }) : board === "moves"? scoreArray.map((item, index) => {
                        return <li key={index} className='high-score'>{item.name} - {item.moves}</li>
                    }): "" }
                </ul>
                <Link to="/">
                    <button className="btn">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default LeaderBoard;
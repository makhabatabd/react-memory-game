import React from 'react';
import { Link } from 'react-router-dom';
import "./LeaderBoard.css"

const LeaderBoard = () => {
    const gameScore = JSON.parse(localStorage.getItem("gameScore")) || [];
    return (
        <div className="container">
            <div id="high-scores">
                <h1 id="final-score">LeaderBoard:</h1>
                <ul id="high-scores-list">
                    {gameScore.map((item, index) => {
                        return <li key={index} className='high-score'>{item.name} - {item.score}</li>
                    })}
                </ul>
                <Link to="/">
                    <button className="btn">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default LeaderBoard;
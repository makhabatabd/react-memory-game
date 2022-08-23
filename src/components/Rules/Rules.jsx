import React from 'react';
import { Link } from 'react-router-dom';
import "./Rules.css"

const Rules = () => {
    return (
        <div className='container'>
            <div className='rules'>
                <h2>Welcome User!</h2>
                <h2>Rules!</h2>
                <p>You will see the cards for a few seconds! After, you have to try to find the match for each card!</p>
                <p>We have different levels. The only difference between levels is the amount of cards you have to match!</p>
                <p>You will also see the amount of moves you made and the time in seconds! After the game you will see your own results!</p>
                <p>You can check a leaderboard!</p>
                <p>To start the game, you have to write your name!</p>
                <p>The main aim for this game is to enjoy and have fun!</p>
                <p>Thanks for choosing us and don't wait to start a game!</p>
                <Link to={"/"}>
                    <button className='btn'>Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Rules;
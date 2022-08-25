import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { authContext } from '../authContext';
import { getCards } from '../helpers';
import Card from './Card';
import "./Card.css"

const Cards = () => {
    const [prev, setPrev] = useState(-1)
    const [moves, setMoves] = useState(0)
    const [timer, setTimer] = useState(0)
    const [correctCards, setCorrectCards] = useState(0)
    let username = localStorage.getItem("user")
    const gameScore = JSON.parse(localStorage.getItem("gameScore") || null) || [];
    const [isEnable, setIsEnable] = useState(true)
    const { mode } = useContext(authContext);
    const [cards, setCards] = useState(() => getCards(mode))
    const [modal, setModal] = useState(false)
    
    useEffect(() => {
        isFinish()
    }, [timer])

    function checkCorrect(element) {
        return element.stat == "correct"
    }

    function isFinish() {
        if (!cards.every(checkCorrect)) {
            setTimeout(function(){
            setTimer(timer + 1)
            }, 1000);
        } else if (cards.every(checkCorrect)) {
            setModal(true)
            if (gameScore.length === 0) {
                gameScore.push(tableScore)
            }
            const exactUser = gameScore.some((item) => item.name === username);
            if (!exactUser) {
                gameScore.push(tableScore);
            }
      if (gameScore.length > 0) {
        gameScore.map((item) => {
          if (item.name === username && item.score > score && score !==0 && item.time > timer && timer !== 0 && item.moves > moves && moves !== 0) {
              item.score = score;
              item.time = timer; 
              item.moves = moves
          }
        });
      }
            gameScore.splice(5);
            localStorage.setItem("gameScore", JSON.stringify(gameScore))
            localStorage.setItem("recentScore", JSON.stringify(recentScore))
        }
    }

    function match(current) {
        if(cards[current].id == cards[prev].id){
            cards[current].stat = "correct"
            cards[prev].stat = "correct"
            setCards([...cards])
            setPrev(-1)
            setCorrectCards(correctCards + 1)
        }else{
            cards[current].stat = "wrong"
            cards[prev].stat = "wrong"
            setCards([...cards])
            setTimeout(() => {
                cards[current].stat = ""
                cards[prev].stat = ""
                setCards([...cards])
                setPrev(-1)
            }, 1000)
        }

        setTimeout(() => {
           setIsEnable(true)
        }, 900);
    }

    
    function cardClick(id) {
        if (isEnable) {
            if (prev === -1) {
            cards[id].stat = "active"
            setCards([...cards])
            setPrev(id)
        }
            else {
                setIsEnable(false)
                match(id)
            }
        setMoves(moves + 1)
        }
    }

    function startOver() {
        setPrev(-1)
        setMoves(0)
        setTimer(0)
        setCorrectCards(0)
        setModal(false)
        cards.map((item) => {
            item.stat = ""
        })
        setCards([...cards].sort(() => Math.random() - .5))
    }

    const recentScore = {
        name: username, 
        time: timer, 
        moves: moves
    }
    
    let score = moves * timer

    const tableScore = {
        name: username, 
        score: score,
        moves: moves, 
        time: timer
    }
    
    return (
        <>
        <div className='card-header'>
            <div className="card-body">
                <h2>Find the match from your favorite TV-shows</h2>
                <div className='card-info'>
                    <p>Amount of actions: {moves}</p>
                    <p>Seconds: {timer}</p>
                </div>
            </div>
            <div className='card-container'>
                {cards.map((item, index) => (
                    <Card key={index} item={item}
                    id={index} cardClick={cardClick} />
                ))}
            </div>
            </div>
            { modal &&
                <div className="modal__outter">
                    <div className="modal__inner">
                        <div className="close-div">
                            <img onClick={() => setModal(false)} src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="close btn" />
                        </div>
                        <p>Player: {username}</p>
                        <p>Time Used: {timer} seconds</p>
                            <p>Moves made: {moves}</p>
                        <Link to="/leaderboard">
                        <button className='btn'>Leaderboard</button>
                        </Link>
                        <Link to="/">
                            <button className='btn'>Home</button>
                            </Link>
                        <button onClick={()=> startOver()} className='btn'>Try again</button>
                    </div>
                </div> 
            }
        </>
    );
};

export default Cards;
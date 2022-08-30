import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    const proScore = JSON.parse(localStorage.getItem("proScore") || null) || [];
    const [isEnable, setIsEnable] = useState(true)
    const { mode } = useContext(authContext);
    const [cards, setCards] = useState(() => getCards(mode))
    const [modal, setModal] = useState(false)
    const [isPause, setIsPause] = useState(false)
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true)
    const [intervalNum, setIntervalNum] = useState(0)
    
    useEffect(() => {
        isFinish()
    }, [timer])

    useEffect(() => {
        startOver()
    }, [])

    function checkCorrect(element) {
        return element.stat == "hide"
    }


    function isFinish() {
        if (cards.every(checkCorrect)) {
            clearInterval(intervalNum)
             setIntervalNum(0)
            setModal(true)
        if (tableScore.score > 0) {
            if (mode === "normal") {
             if (gameScore.length === 0) {
                gameScore.push(tableScore)
            }
            const exactUser = gameScore.some((item) => item.name === username);
            if (!exactUser) {
                gameScore.push(tableScore);
            }
            if (gameScore.length > 0) {
            gameScore.map((item) => {
          if (item.name === username && item.score > score && item.time > timer  && item.moves > moves) {
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
            
            else if (mode === "pro") {
            if (proScore.length === 0) {
               proScore.push(tableScore)
            }
            const exactUser = proScore.some((item) => item.name === username);
            if (!exactUser) {
                proScore.push(tableScore);
            }
            if (proScore.length > 0) {
                proScore.map((item) => {
            if (item.name === username && item.score > score && score !==0 && item.time > timer && timer !== 0 && item.moves > moves && moves !== 0) {
              item.score = score;
              item.time = timer; 
              item.moves = moves
          }
        });
      }
            proScore.splice(5);
            localStorage.setItem("proScore", JSON.stringify(proScore))
            localStorage.setItem("recentScore", JSON.stringify(recentScore))
      }
            }
        }
    }

    function match(current) {
        if(cards[current].id == cards[prev].id){
            cards[current].stat = "correct"
            cards[prev].stat = "correct"
            setTimeout(() => {
                cards[current].stat = "hide"
                cards[prev].stat = "hide"
            },500)
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
        }, 1000);
    }

    function cardClick(id) {
        if (!loader) {
            if (!intervalNum && !isPause) {
                const interval = setInterval(() => {
                 if(!modal) setTimer(prev => prev+1)
                }, 1000)
                setIntervalNum(interval)
          }   

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
}


    function startOver() {
        setPrev(-1)
        setMoves(0)
        setTimer(0)
        setCorrectCards(0)
        setModal(false)
        setLoader(true)
        cards.map((item) => {
            item.stat = ""
        })
        setCards([...cards].sort(() => Math.random() - 0.5))
    }

    const recentScore = {
        name: username, 
        time: timer, 
        moves: moves
    }

     function dropStat() {
        cards.map((item) => {
            item.stat = ""
        })
    }
    
    let score = moves * timer

    const tableScore = {
        name: username, 
        score: score,
        moves: moves, 
        time: timer
    }

    function changeStates() {
        setIsPause(true)
        setIsEnable(false)
        clearInterval(intervalNum)
        setIntervalNum(0)
    }

    function undoChangesStates() {
        setIsPause(false)
        setIsEnable(true)
        const interval = setInterval(() => {         
        if(!modal) setTimer(prev => prev+1)
        }, 1000)
        setIntervalNum(interval)
    }

    function exit() {
        dropStat()
        navigate("/")
    }


    
    return (
        <>
        <div className='card-header'>
            <div className="card-body">
                <h2>Find the match from your favorite TV-shows</h2>
                <div className='card-info'>
                    <p>Actions: {moves}</p>
                    <p>Seconds: {timer}</p>
                </div>
                    <div className="card-options">
                        {!isPause ? <button onClick={() => changeStates()}>Pause</button> : <button onClick={() => undoChangesStates()}>Start</button>}
                        <button onClick={() => exit()}>Exit</button>
                </div>
            </div>
                <div className='card-container'>
                    {cards.map((item, index) => (
                        <Card key={index} item={item}
                        id={index} cardClick={cardClick} setLoader={setLoader} loader={loader} />
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
                        <button onClick={()=>dropStat()} className='btn'>Leaderboard</button>
                        </Link>
                        <Link to="/">
                            <button onClick={()=>dropStat()} className='btn'>Home</button>
                            </Link>
                        <button onClick={() => startOver()} className='btn'>Try again</button>
                    </div>
                </div> 
            }
        </>
    );
};

export default Cards;
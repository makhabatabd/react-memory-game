import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Card from './Card';
import "./Card.css"

const Cards = () => {
    const [cards, setCards] = useState([
        { id: 0, name: 'Friends', status: '', url: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg' },
        { id: 0, name: 'Friends', status: '', url: 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg' },
        { id: 1, name: 'Big Bang', status: '', url: 'https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_FMjpg_UX1000_.jpg' },
        { id: 1, name: 'Big Bang', status: '', url: 'https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_FMjpg_UX1000_.jpg' },
        { id: 2, name: 'Breaking Bad', status: '', url: 'https://flxt.tmsimg.com/assets/p185846_b_v8_ad.jpg' },
        { id: 2, name: 'Breaking Bad', status: '', url: 'https://flxt.tmsimg.com/assets/p185846_b_v8_ad.jpg' },
        // { id: 3, name: 'Lucifer', status: '', url: 'https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw' },
        // { id: 3, name: 'Licifer', status: '', url: 'https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw' },
        // { id: 4, name: 'How to get away with murder', status: '', url: 'https://thecentraltrend.com/wp-content/uploads/2020/02/how-to-get-away-murder-season-2-thatgrapejuice-600x800-1.jpg' },
        // { id: 4, name: 'How to get away with murder', status: '', url: 'https://thecentraltrend.com/wp-content/uploads/2020/02/how-to-get-away-murder-season-2-thatgrapejuice-600x800-1.jpg' },
        // { id: 5, name: 'Travelers', status: '', url: 'https://flxt.tmsimg.com/assets/p13257209_b_v13_aa.jpg' },
        // { id: 5, name: 'Travelers', status: '', url: 'https://flxt.tmsimg.com/assets/p13257209_b_v13_aa.jpg' },
        // { id: 6, name: 'Black Bird', status: '', url: 'https://m.media-amazon.com/images/M/MV5BZjI3NjcyN2UtMGNhZC00YTYxLWJmOTQtNWI1ZGJmNjA4ZjY5XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg' },
        // { id: 6, name: 'Black Bird', status: '', url: 'https://m.media-amazon.com/images/M/MV5BZjI3NjcyN2UtMGNhZC00YTYxLWJmOTQtNWI1ZGJmNjA4ZjY5XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg' },
        // { id: 7, name: 'Suits', status: '', url: 'https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg' },
        // { id: 7, name: 'Suits', status: '', url: 'https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg' },
    ].sort(() => Math.random() - .5))
    const [prev, setPrev] = useState(-1)
    const [moves, setMoves] = useState(0)
    const [timer, setTimer] = useState(0)
    const [correctCards, setCorrectCards] = useState(0)
    let username = localStorage.getItem("user")
    const gameScores = JSON.parse(localStorage.getItem("gameScores") || null) || [];

    useEffect(() => {
        if (correctCards < 3) {
            setTimeout(function(){
            setTimer(timer + 1)
    }, 1000);
        }
    }, [timer])

    const score = {
        name: username, 
        time: timer, 
        moves: moves
     }

    function match(current) {
        if(cards[current].id == cards[prev].id){
            cards[current].stat = "correct"
            cards[prev].stat = "correct"
            let scoreIncrement = correctCards + 1
            setCorrectCards(scoreIncrement)
            if (scoreIncrement === 3) {
                gameScores.push(score)
                localStorage.setItem("gameScores", JSON.stringify(gameScores))
            }
            setCards([...cards])
            setPrev(-1)
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
    }

    
    function cardClick(id){
        if (prev === -1) {
            cards[id].stat = "active"
            setCards([...cards])
            setPrev(id)
        }
        else{
            match(id)
        }
        setMoves(moves + 1)
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
            {correctCards === 3 &&
                <div className="modal__outter">
                    <div className="modal__inner">
                        <div className="close-div">
                            <img onClick={() => setCorrectCards(correctCards - 1)} src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="close btn" />
                        </div>
                        <p>Player: {username}</p>
                        <p>Time Used: {timer} seconds</p>
                        <p>Moves made: {moves}</p>
                        <button className='btn'>Leaderboard</button>
                        <Link to="/">
                            <button className='btn'>Home</button>
                        </Link>
                    </div>
                </div> 
            }
        </>
    );
};

export default Cards;
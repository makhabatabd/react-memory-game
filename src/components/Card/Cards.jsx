import React, { useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [cards, setCards] = useState([
        { id: 0, name: 'Friends', status: '', img: '/src/images/friends.jpg' },
        { id: 0, name: 'Friends', status: '', img: '/src/images/friends.jpg' },
        { id: 1, name: 'Big Bang', status: '', img: '/src/images/big-bang.jpeg' },
        { id: 1, name: 'Big Bang', status: '', img: '/src/images/big-bang.jpeg' },
        { id: 2, name: 'Breaking Bad', status: '', img: '/src/images/breaking-bad.jpeg' },
        { id: 2, name: 'Breaking Bad', status: '', img: '/src/images/breaking-bad.jpeg' },
        { id: 3, name: 'Lucifer', status: '', img: '/src/images/luci.jpeg' },
        { id: 3, name: 'Licifer', status: '', img: '/src/images/luci.jpeg' },
        { id: 4, name: 'How to get away with murder', status: '', img: '/src/images/murder.jpeg' },
        { id: 4, name: 'How to get away with murder', status: '', img: '/src/images/murder.jpeg' },
        { id: 5, name: 'Travelers', status: '', img: '/src/images/travelers.jpeg' },
        { id: 5, name: 'Travelers', status: '', img: '/src/images/travelers.jpeg' },
        { id: 6, name: 'Black Bird', status: '', img: '/src/images/black-bird.jpg.jpeg' },
        { id: 6, name: 'Black Bird', status: '', img: '/src/images/black-bird.jpg.jpeg' },
        { id: 7, name: 'Suits', status: '', img: '/src/images/suits.jpg' },
        { id: 7, name: 'Suits', status: '', img: '/src/images/suits.jpg' },
    ].sort(() => Math.random() - .5))
    const [prev, setPrev] = useState(-1)

    function match(current) {
        if(cards[current].id == cards[prev].id){
            cards[current].stat = "correct"
            cards[prev].stat = "correct"
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
        if(prev === -1){
            cards[id].stat = "active"
            setCards([...cards])
            setPrev(id)
        }else{
            match(id)
        }
    }

    return (
        <div className='container'>
            {cards.map((item, index) => (
                <Card key={index} item={item} id={index} cardClick={cardClick} />
            ))}
        </div>
    );
};

export default Cards;
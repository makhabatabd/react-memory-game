import React from 'react'

const Card = ({ id, cardClick, item }) => {
    console.log(item)
     const itemClass = item.stat ? " active " + item.stat : ""
    return (
        <div className={"card" + itemClass} onClick={() => cardClick(id)}>
            <img src={item.img} alt={item.name} />
        </div>
    );
};

export default Card;
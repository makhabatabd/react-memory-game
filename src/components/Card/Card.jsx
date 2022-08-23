import React from 'react'

const Card = ({ id, cardClick, item}) => {
     const itemClass = item.stat ? " active " + item.stat : ""
    return (
        <div className={"card" + itemClass} onClick={() => cardClick(id)}>
            <img src={item.url} alt={item.name} />
        </div>
    );
};

export default Card;
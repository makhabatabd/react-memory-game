import React, { useEffect, useState } from 'react'

const Card = ({ id, cardClick, item }) => {
    let classItem = ""
    let classImage = ""

    if (item.stat === "wrong" || item.stat === "correct" || item.stat === "active") {
        classItem = " active " + item.stat
    }
    if (item.stat === "active") {
        classItem = " card_rotate "
        classImage=" image_rotate"
    }
   
    return (
        <div className={"card " + classItem} onClick={() => cardClick(id)}>
            <img className={classImage} src={item.url} alt={item.name} />
        </div>
    );
};

export default Card;
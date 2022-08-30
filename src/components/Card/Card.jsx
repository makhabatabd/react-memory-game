import React, { useEffect, useState } from 'react'

const Card = ({ id, cardClick, item, setLoader,loader }) => {
    let classItem = ""
    let classImage = ""

    if (item.stat === "wrong"|| item.stat === "active" || item.stat === "correct") {
        classItem = " active " + item.stat
    }
    if (item.stat === "hide") {
        classItem = item.stat
    }
    if (item.stat === "active") {
        classItem = " card_rotate "
        classImage=" image_rotate "
    }

    return  (
        <div className={"card " + classItem} onClick={() => cardClick(id)}>
            <img onLoad={() => setLoader(false)} className={classImage} src={item.url} alt={item.name} />
            {loader && <div className='loader'>Loading</div>}
        </div>
    );
};

export default Card;
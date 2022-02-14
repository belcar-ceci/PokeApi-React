import React from "react";
import "../assets/style/card.css";

const Card = ({id, image, name, type}) => {
    return(
        <div className="card-container">
            <div className="item-card">#0{id}</div>
            <img className="image-card" src={image} alt={name} />
            <div className="details-card">
                <h3>{name}</h3>
                <p>Type: {type}</p>
            </div>
        </div>
    )

};
export default Card;
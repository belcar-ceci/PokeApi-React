import React from "react";
import "../assets/style/card.css";

const Card = ({id, image, name, type}) => {
    return(
        <div className="card-container">
            <div className="item-card">#0{id}</div>
            <img className="image-card" src={image} alt={name} data-testid="image"/>
            <div className="details-card">
                <h3 className="name-pokemon">{name}</h3>
                <p className="type-pokemon">Type:{type}</p>
            </div>
        </div>
    )

};
export default Card;
// sets up reusable FlowerCard component
import React from "react";
import "./FlowerCard.css";

// pass image to each card 
const FlowerCard = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
            <img alt={props.image.replace(".png", "")} src={require("../../images/" + props.image)} />
        </div>
    </div>
);

export default FlowerCard;
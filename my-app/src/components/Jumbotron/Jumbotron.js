// sets up reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <header className="header">
        <h1>Flower Power Guessing Game</h1>
        <h2>Click on a flower to earn points, but don't click on the same flower more than once or the game will restart!</h2>
    </header>
);

export default Jumbotron;
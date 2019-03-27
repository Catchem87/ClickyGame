// import dependencies
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import flower from "./flower.json";
import "./App.css";

// set state to 0 or empty
class App extends Component {
  state = {
    flower,
    clickedFlower: [],
    score: 0
  };
  // when a card is clicked, the flower is removed from the array
  imageClick = event => {
    const currentFlower = event.target.alt;
    const FlowerAlreadyClicked =
      this.state.clickedFlower.indexOf(currentFlower) > -1;
      // if a card that has already been selected is clicked, the game is reset and cards shuffled
      if (FlowerAlreadyClicked) {
        this.setState({
          fish: this.state.fish.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedFlower: [],
          score: 0
        });
        alert("You already picked this flower, you lose. Let's try again!");
        // if a card that has not already been selected is clicked, the score is increased and the cards shuffled
      } else {
        this.setState({
          flower: this.state.flower.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedFlower: this.state.clickedFlower.concat(currentFlower),
          score: this.state.score + 1
        },
        // if player guesses all flowers correctly, send winning message and reset game
        () => {
          if (this.state.score === 12) {
            alert("Congratulations! You won!");
            this.setState({
              flower: this.state.flower.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedFlower: [],
              score: 0
            });
          }
        }
      );
    }
  };
  // components to be rendered
  render() {
    return (
      <div>
        <Navbar score={this.state.score} />
        <Jumbotron />
        <div className="wrapper">
          {this.state.flower.map(flower => (
            <FlowerCard
              imageClick={this.imageClick}
              id={flower.id}
              key={flower.id}
              image={flower.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;





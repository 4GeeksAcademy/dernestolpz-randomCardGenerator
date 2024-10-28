/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const suits = ["heart", "diamond", "club", "spade"];

  function generateCard() {
    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomValueIndex = Math.floor(Math.random() * values.length);

    const suit = suits[randomSuitIndex];
    const value = values[randomValueIndex];
    const symbols = { heart: "♥", diamond: "♦", club: "♣", spade: "♠" };

    document.getElementById("center").innerHTML = value;
    document.getElementById("top-left").innerHTML = symbols[suit];
    document.getElementById("bottom-right").innerHTML = symbols[suit];

    const card = document.getElementById("card");
    card.className = `card ${suit}`;
  }

  generateCard();
};

/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let myDrawBotton = document.querySelector("#buttonDraw");
const suits = ["\u2666", "\u2665", "\u2660", "\u2663"];
const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let mySortingArray = [];

myDrawBotton.addEventListener("click", myInputReciver);

console.log(myDrawBotton);

function myInputReciver() {
  let myTextInputValue = document.querySelector("#variable");
  let inputValue = myTextInputValue.value;
  console.log(inputValue);
  cardsRandomaizer(inputValue);
  //   cardsGenerator(inputValue);
  return inputValue;
}

let randomIndex = array => {
  let radomNumber = Math.floor(Math.random() * array.length);
  return array[radomNumber];
};

function cardsGenerator(inputValue) {
  let numberRandomIndex = randomIndex(number);

  mySortingArray.push(numberRandomIndex);

  let suitsRandomIndex = randomIndex(suits);

  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card");

  let cardDivMid = document.createElement("div");
  cardDivMid.classList.add("d-flex");
  cardDivMid.classList.add("justify-content-start");

  let cardDivTop = document.createElement("div");
  cardDivTop.classList.add("d-flex");
  cardDivTop.classList.add("justify-content-center");

  let cardDivBottom = document.createElement("div");
  cardDivBottom.classList.add("d-flex");
  cardDivBottom.classList.add("justify-content-start");
  cardDivBottom.classList.add("rotate");

  let cardMidContent = document.createTextNode(suitsRandomIndex);
  if (suitsRandomIndex == "\u2665" || suitsRandomIndex == "\u2666") {
    cardDivMid.classList.add("text-danger");
  }
  cardDivMid.appendChild(cardMidContent);
  cardContainer.appendChild(cardDivMid);

  let cardTopContent = document.createTextNode(numberRandomIndex);
  cardDivTop.appendChild(cardTopContent);
  cardContainer.appendChild(cardDivTop);

  let cardBottomContent = document.createTextNode(suitsRandomIndex);
  if (suitsRandomIndex == "\u2665" || suitsRandomIndex == "\u2666") {
    cardDivBottom.classList.add("text-danger");
  }
  cardDivBottom.appendChild(cardBottomContent);
  cardContainer.appendChild(cardDivBottom);

  return cardContainer;
}
function cardsRandomaizer(inputValue) {
  let myCardsContainer = document.querySelector("#cardsContainer");
  myCardsContainer.innerHTML = "";
  for (let index = 0; index < inputValue; index++) {
    myCardsContainer.appendChild(cardsGenerator());
  }
  console.log(mySortingArray);
  // ---pasar sort aquí
  mySortingArray = [];
}

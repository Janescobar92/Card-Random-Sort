/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let myDrawBotton = document.querySelector("#buttonDraw");
let myBubbleSortButton = document.querySelector("#bubbleSortbutton");
const suits = ["\u2666", "\u2665", "\u2660", "\u2663"];
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let mySortingArray = [];

myDrawBotton.addEventListener("click", myInputReciver);
myBubbleSortButton.addEventListener("click", bubbleSort);

function myInputReciver() {
  // ----Función para recibir el input del usuario.
  let myTextInputValue = document.querySelector("#variable");
  let inputValue = myTextInputValue.value;
  console.log(inputValue);
  cardsRandomaizer(inputValue);
  return inputValue;
}

let randomIndex = array => {
  // ----función para seleccionar aleatoriamente un valor del array elegido.
  let radomNumber = Math.floor(Math.random() * array.length);
  return array[radomNumber];
};

let numberSwitcher = () => {
  // ----Esta función sirve para cambiar los valores numericos 1, 11,12 y 13 por sus equivalentes alfabeticos A, J, Q y K.
  let numberRandomIndex = randomIndex(number);
  mySortingArray.push(numberRandomIndex);
  if (numberRandomIndex == 1) {
    numberRandomIndex = "A";
  } else if (numberRandomIndex == 11) {
    numberRandomIndex = "J";
  } else if (numberRandomIndex == 12) {
    numberRandomIndex = "Q";
  } else if (numberRandomIndex == 13) {
    numberRandomIndex = "K";
  }
  return numberRandomIndex;
};

function cardsGenerator() {
  // función para generar cartas de cero
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

  let cardTopContent = document.createTextNode(numberSwitcher());
  cardDivTop.appendChild(cardTopContent);
  cardContainer.appendChild(cardDivTop);

  let cardBottomContent = document.createTextNode(suitsRandomIndex);
  if (suitsRandomIndex == "\u2665" || suitsRandomIndex == "\u2666") {
    // condición utilizada para cambiar el color del palo a rojo en caso de que sea diamante o corazón.
    cardDivBottom.classList.add("text-danger");
  }
  cardDivBottom.appendChild(cardBottomContent);
  cardContainer.appendChild(cardDivBottom);
  return cardContainer;
}

function cardsRandomaizer(inputValue) {
  // ---función para generar cartas en funcion del input introducido.
  let myCardsContainer = document.querySelector("#cardsContainer");
  myCardsContainer.innerHTML = ""; // elimina el contenido actual del div que contiene las cartas.
  for (let index = 0; index < inputValue; index++) {
    myCardsContainer.appendChild(cardsGenerator());
  }
  console.log(mySortingArray);
  // ---pasar sort aquí.
  bubbleSort(mySortingArray);
  mySortingArray = []; // elimina el contenido actual del array con los valores de las cartas.
}

const bubbleSort = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index] > arr[index + 1]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  console.log(arr);
  return arr;
};

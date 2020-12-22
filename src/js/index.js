/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

let myDrawBotton = document.querySelector("#buttonDraw");
let myBubbleSortButton = document.querySelector("#bubbleSortbutton");
const suits = ["\u2666", "\u2665", "\u2660", "\u2663"];
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let myCardsContainer = document.querySelector("#cardsContainer");
let mySortingCardsContainer = document.querySelector("#sortCardsContainer");
let myNumbersArray = [];
let mySuitsArray = [];
let myCardValues = [];

myDrawBotton.addEventListener("click", myInputReciver);
myBubbleSortButton.addEventListener("click", bubbleSort);

function myInputReciver() {
  // ----Función para recibir el input del usuario.
  let myTextInputValue = document.querySelector("#variable");
  let inputValue = myTextInputValue.value;
  cardsRandomaizer(inputValue);
  return inputValue;
}

let randomIndex = array => {
  // ----función para seleccionar aleatoriamente un valor del array elegido.
  let radomNumber = Math.floor(Math.random() * array.length);
  return array[radomNumber];
};

let randomNumber = () => {
  let numberRandomIndex = randomIndex(number);
  myNumbersArray.push(numberRandomIndex);
  return numberRandomIndex;
};

let suitsRandom = () => {
  let suitsRandomIndex = randomIndex(suits);
  mySuitsArray.push(suitsRandomIndex);
  return suitsRandomIndex;
};
let numberSwitcher = number => {
  // ----Esta función sirve para cambiar los valores numericos 1, 11,12 y 13 por sus equivalentes alfabeticos A, J, Q y K.
  if (number == 1) {
    number = "A";
  } else if (number == 11) {
    number = "J";
  } else if (number == 12) {
    number = "Q";
  } else if (number == 13) {
    number = "K";
  }
  return number;
};

function cardsGenerator() {
  let cardValue = [];
  let cardNumber = randomNumber();
  myNumbersArray.push(cardNumber);
  cardValue.push(cardNumber);
  let suits = suitsRandom();
  cardValue.push(suits);
  myCardValues.push(cardValue);

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

  let cardMidContent = document.createTextNode(suits);

  if (suits == "\u2665" || suits == "\u2666") {
    cardDivMid.classList.add("text-danger");
  }
  cardDivMid.appendChild(cardMidContent);
  cardContainer.appendChild(cardDivMid);

  let cardTopContent = document.createTextNode(numberSwitcher(cardNumber));
  cardDivTop.appendChild(cardTopContent);
  cardContainer.appendChild(cardDivTop);

  let cardBottomContent = document.createTextNode(suits);
  if (suits == "\u2665" || suits == "\u2666") {
    // condición utilizada para cambiar el color del palo a rojo en caso de que sea diamante o corazón.
    cardDivBottom.classList.add("text-danger");
  }
  cardDivBottom.appendChild(cardBottomContent);
  cardContainer.appendChild(cardDivBottom);

  return cardContainer;
}

function sortCardGenerator(arr, num) {
  let sortCardContainer = document.createElement("div");
  sortCardContainer.classList.add("d-flex");
  arr.forEach(element => {
    console.log(element, "THIS IS THE ELEMENT");
    let sortCard = document.createElement("div");
    sortCard.classList.add("card");

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

    let suits = element[1];
    let cardMidContent = document.createTextNode(suits);

    if (suits == "\u2665" || suits == "\u2666") {
      cardDivMid.classList.add("text-danger");
    }
    cardDivMid.appendChild(cardMidContent);
    sortCard.appendChild(cardDivMid);

    let cardTopContent = document.createTextNode(numberSwitcher(element[0]));
    cardDivTop.appendChild(cardTopContent);
    sortCard.appendChild(cardDivTop);

    let cardBottomContent = document.createTextNode(suits);
    if (suits == "\u2665" || suits == "\u2666") {
      cardDivBottom.classList.add("text-danger");
    }
    cardDivBottom.appendChild(cardBottomContent);
    sortCard.appendChild(cardDivBottom);
    sortCardContainer.appendChild(sortCard);
  });
  let mySortingCardsTitleText = document.createTextNode("BUBBLE STEP " + num);
  let mySortingCardsTitle = document.createElement("p");
  mySortingCardsTitle.classList.add("text-light");
  mySortingCardsTitle.appendChild(mySortingCardsTitleText);
  mySortingCardsContainer.appendChild(mySortingCardsTitle);
  mySortingCardsContainer.appendChild(sortCardContainer);
}

function cardsRandomaizer(inputValue) {
  // ---función para generar cartas en funcion del input introducido.
  myCardsContainer.innerHTML = ""; // elimina el contenido actual del div que contiene las cartas.
  for (let index = 0; index < inputValue; index++) {
    myCardsContainer.appendChild(cardsGenerator());
  }
  //   console.log(myNumbersArray);
  console.log(mySuitsArray);
  // ---pasar sort aquí.
  bubbleSort(myCardValues);
  //   bubbleSort(myNumbersArray);
  myNumbersArray = []; // elimina el contenido actual del array con los valores de las cartas.
  mySuitsArray = [];
}

const bubbleSort = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  let step = 0;
  while (wall > 0) {
    let index = 0;
    step++;
    sortCardGenerator(arr, step);
    console.log(arr);
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index][0] > arr[index + 1][0]) {
        let aux = arr[index];
        console.log(aux[0], "THIS IS AUUX VALUE");
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  //   console.log(arr);
  return arr;
};

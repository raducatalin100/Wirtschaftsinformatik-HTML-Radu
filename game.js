//Guess number game

const container_box = document.getElementById("container_box");
const guessField = document.getElementById("guessField");
const txt = document.getElementById("txt");
const container_txt = document.getElementById("container_txt");
const btn = document.getElementById("btn-game");

//function to randomise a number
let randomNumber = Math.floor(Math.random() * 101);

// function to show how many chances do you still have
let chancesTxt = document.getElementById("chancesTxt");

let number;
let Chances = 6;
chancesTxt.innerHTML = "Chances: still " + Chances;
console.log(randomNumber);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(guessField.value);
  Chances--;
  chancesTxt.innerHTML = "Chances: still " + Chances;
  if (Chances < 0) {
    aBox("Lost");
  }
  number = guessField.value;
  checkGuess(number);
  guessField.value = "";
});

function checkGuess(number) {
  if (number == randomNumber) {
    aBox("Win");
  } else if (number > randomNumber) {
    txt.innerHTML = "The number is too big!";
  } else {
    txt.innerHTML = "The number is too small!";
  }
}

function aBox(e) {
  container_box.classList.add("active");
  container_txt.innerHTML = "You " + e + " the game!";
  randomNumber = Math.floor(Math.random() * 101);
}

function play(e) {
  container_box.classList.remove("active");
  Chances = 5;
  txt.innerHTML = "";
  chancesTxt.innerHTML = "Chances: still " + Chances;
}

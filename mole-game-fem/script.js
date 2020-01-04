document.addEventListener("DOMContentLoaded", onDOMReady);

let numHoles = 10;
let points = 0;
let moleInterval;

let moleImg = {
  hungry: "./img/mole-hungry.png",
  sad: "./img/mole-sad.png",
  fed: "./img/mole-fed.png",
  leaving: "./img/mole-leaving.png"
};

let kingMoleImg = {
  hungry: "./img/king-mole-hungry.png",
  sad: "./img/king-mole-sad.png",
  fed: "./img/king-mole-fed.png",
  leaving: "./img/king-mole-leaving.png"
};

function onDOMReady() {
  updateScore();
  createHoles(numHoles);
  moleInterval = setInterval(chooseRandomHole, 1000);
}

function updateScore() {
  let worm = document.querySelector(".worm");
  worm.style.width = points + "%";

  if (points >= 90) {
    setTimeout(showCongrats, 1000);
  }
}

function chooseRandomHole() {
  let randomNumber = Math.floor(Math.random() * numHoles);
  let hole = document.querySelector(`[data-number="${randomNumber}"]`);
  if (hole.dataset.status === "empty") {
    insertMole(randomNumber);
  }
}

function createHoles(num) {
  let container = document.querySelector(".container");

  for (let i = 0; i < num; i++) {
    let div = document.createElement("div");
    div.className = "hole";
    div.dataset.number = i;
    div.dataset.status = "empty";
    div.dataset.type = "no-king";
    container.appendChild(div);
  }
}

function insertMole(num) {
  let hole = document.querySelector(`[data-number="${num}"]`);
  let img = document.createElement("img");
  hole.appendChild(img);

  isKing(num);
  setMoleHungry(num);
  setTimeout(() => setMoleSad(num), 2000);
  setTimeout(() => setMoleLeaving(num), 2500);
  setTimeout(() => removeMole(num), 3000);
}

function isKing(num) {
  let probability = Math.random();
  let hole = document.querySelector(`[data-number="${num}"]`);
  if (probability <= 0.2) {
    hole.dataset.type = "king";
  } else {
    hole.dataset.type = "no-king";
  }
}

function setMoleHungry(num) {
  let hole = document.querySelector(`[data-number="${num}"]`);
  hole.dataset.status = "hungry";
  let mole = document.querySelector(`[data-number="${num}"] img`);

  if (hole.dataset.type === "king") {
    mole.src = kingMoleImg.hungry;
  } else {
    mole.src = moleImg.hungry;
  }

  hole.addEventListener("click", setMoleFed);
}

function setMoleFed() {
  let num = this.dataset.number;
  let hole = document.querySelector(`[data-number="${num}"]`);
  if (hole.dataset.status === "fed") return;
  hole.dataset.status = "fed";
  let mole = document.querySelector(`[data-number="${num}"] img`);

  if (hole.dataset.type === "king") {
    mole.src = kingMoleImg.fed;
    points += 18;
  } else {
    mole.src = moleImg.fed;
    points += 9;
  }

  updateScore();
}

function setMoleSad(num) {
  let hole = document.querySelector(`[data-number="${num}"]`);
  if (hole.dataset.status === "fed") return;

  hole.dataset.status = "sad";
  let mole = document.querySelector(`[data-number="${num}"] img`);

  if (hole.dataset.type === "king") {
    mole.src = kingMoleImg.sad;
  } else {
    mole.src = moleImg.sad;
  }

  hole.removeEventListener("click", setMoleFed);
}

function setMoleLeaving(num) {
  let hole = document.querySelector(`[data-number="${num}"]`);
  hole.dataset.status = "leaving";
  let mole = document.querySelector(`[data-number="${num}"] img`);

  if (hole.dataset.type === "king") {
    mole.src = kingMoleImg.leaving;
  } else {
    mole.src = moleImg.leaving;
  }
}

function removeMole(num) {
  let hole = document.querySelector(`[data-number="${num}"]`);
  hole.dataset.status = "empty";
  let mole = document.querySelector(`[data-number="${num}"] img`);
  mole.parentNode.removeChild(mole);
}

function showCongrats() {
  clearInterval(moleInterval);

  let div = document.querySelector(".winner");
  div.style.visibility = "visible";

  let button = document.querySelector(".winner-item button");
  button.addEventListener("click", onButtonClick);
}

function onButtonClick() {
  points = 0;
  updateScore();
  moleInterval = setInterval(chooseRandomHole, 1000);

  let div = document.querySelector(".winner");
  div.style.visibility = "hidden";
}

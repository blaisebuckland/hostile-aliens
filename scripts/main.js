import {Ship} from "./ship-class.js"

// Query Selectors
const mothershipSection = document.querySelector(".mothership");
const defenceSection = document.querySelector(".defence");
const attackSection = document.querySelector(".attack");
const fireBtn = document.querySelector("#fire-btn");
const instructionsBtn = document.querySelector("#instructions-btn");
const instructionsModal = document.querySelector("#instructions-modal-container");
const replayBtnMain = document.querySelector("#replay-btn-main");
const replayBtnModal = document.querySelector("#replay-btn-modal");
const winningModal = document.querySelector("#winning-modal-container");
const closeWinningModalBtn = document.querySelector("#winning-modal-close");
const closeInstructionsModalBtn = document.querySelector("#instructions-modal-close");

// Variables
let ships = [];
let shipsInPlay = [];

// Functions
const buildShips = (indexStart, shipType, shipName, totalPoints, attackDamage, numberOfShips) => {
    for (let index = indexStart; index < (indexStart + numberOfShips); index++) {
        ships.push(new Ship(shipType, shipName, totalPoints, attackDamage));
        document.querySelector(`.${shipType}`).innerHTML += `<div class="ship" id="${shipType}${index}"><h4>${shipName}</h4> <p>Points: ${totalPoints}</p></div>`;
    }
}

const startGame = () => {
    buildShips(0, "mothership", "Mother Ship", 100, 9, 1);
    buildShips(1, "defence", "Defence Ship", 80, 10, 5);
    buildShips(6, "attack", "Attack Ship", 45, 12, 8);
    shipsInPlay = [...ships];
}

startGame();

const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random()* shipsInPlay.length);
    return randomIndex;
}

const displayNewPoints = (index, currentShip) => {
    document.querySelector(`#${currentShip.shipType}${index}`).innerHTML = `<h4>${currentShip.shipName}</h4> <p>Points: ${currentShip.totalPoints}</p>`
}

const shipDestroyed = (index, currentShip) => {
    document.querySelector(`#${currentShip.shipType}${index}`).classList.add("ship--destroyed");
    shipsInPlay.splice(index);
}

const gameOver = () => {
    const displayWinningModal = () => winningModal.style.display = "block";
    setTimeout(displayWinningModal, 800);
}

const checkPoints = () => {
    if (ships[0].totalPoints === 0 || (ships.every(ship => ship.totalPoints === 0))) {
        gameOver();
    }
}

const fireAtShip = () => {
    let hitShipIndex = getRandomIndex();
    let currentShip = shipsInPlay[hitShipIndex]
    currentShip.reducePoints();
    if (currentShip.totalPoints === 0) {
        shipDestroyed(hitShipIndex, currentShip)
    }
    checkPoints();
    displayNewPoints(hitShipIndex, currentShip);
}

const resetGame = () => {
    winningModal.style.display = "none";
    mothershipSection.innerHTML = "";
    defenceSection.innerHTML = "";
    attackSection.innerHTML = "";
    ships = [];
    shipsInPlay = [];
    startGame();
 }

const displayInstructions = () => instructionsModal.style.display = "block";

// Event listeners
fireBtn.addEventListener("click", fireAtShip);
replayBtnMain.addEventListener("click", resetGame);
replayBtnModal.addEventListener("click", resetGame);
instructionsBtn.addEventListener("click", displayInstructions);
closeWinningModalBtn.addEventListener("click", () => winningModal.style.display = "none");
closeInstructionsModalBtn.addEventListener("click", () => instructionsModal.style.display = "none");
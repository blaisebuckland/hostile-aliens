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

let ships = [];
let shipsInPlay = [];
let randomShip = "";

class Ship {
    constructor(shipType, shipName, totalPoints, attackDamage) {
        this.shipType = shipType;
        this.shipName = shipName;
        this.totalPoints = totalPoints;
        this.attackDamage = attackDamage;
    }

    hitShip(index) {
        this.totalPoints -= this.attackDamage;
        if (this.totalPoints < 0) this.totalPoints = 0;
        document.querySelector(`#${this.shipType}${index}`).innerHTML = `<h5>${this.shipName}</h5> <p>Points: ${this.totalPoints}</p>`;
        if ((this.totalPoints === 0)) {
            document.querySelector(`#${this.shipType}${index}`).classList.add("ship--destroyed");
            shipsInPlay.splice(index);
        } 
    }
}
// Should this be a method in the Ship class? Or is that weird because we don't need to be able to call it for individual instances of the class?
const buildShips = (indexStart, shipType, shipName, totalPoints, attackDamage, numberOfShips) => {
    for (let index = indexStart; index < (indexStart + numberOfShips); index++) {
        ships.push(new Ship(shipType, shipName, totalPoints, attackDamage));
        document.querySelector(`.${shipType}`).innerHTML += `<div class="ship" id="${shipType}${index}"><h5>${shipName}</h5> <p>Points: ${totalPoints}</p></div>`;
    }
}

// all hit points set to 50 for testing, change this back to correct numbers!
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

const gameOver = () => {
    const displayWinningModal = () => winningModal.style.display = "block";
    setTimeout(displayWinningModal, 800);
}

const checkPoints = () => {
    if (ships[0].totalPoints === 0) gameOver();
    if (ships.every(ship => ship.totalPoints === 0)) gameOver();
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
// get this function out of the event listener
 fireBtn.addEventListener("click", () => {
    let hitShipIndex = getRandomIndex();
    // if (ships[hitShipIndex].totalPoints === 0) hitShipIndex = getRandomIndex();
    shipsInPlay[hitShipIndex].hitShip(hitShipIndex);
    checkPoints();
});

const displayInstructions = () => instructionsModal.style.display = "block";

replayBtnMain.addEventListener("click", resetGame);
replayBtnModal.addEventListener("click", resetGame);
instructionsBtn.addEventListener("click", displayInstructions);
closeWinningModalBtn.addEventListener("click", () => winningModal.style.display = "none");
closeInstructionsModalBtn.addEventListener("click", () => instructionsModal.style.display = "none");
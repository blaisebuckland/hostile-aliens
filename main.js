/* HOSTILE ALIENS


OOP 

MAKING OUR SHIPS - CLASS OF SHIP - EXTEND FOR HIT TYPE. PARAMETERS - STATRTING POINTS, LOSS INCREMENT

BUTTON - ON CLICK HIT A RANDOM SHIP - RANDOMISER FOR ALL SHIPS THAT WILL NOT SELECT  A SHIP AT 0 POINT ALREADY

WHEN HIT, DECREASE POINTS OR GAME OVER IF MOTHER SHIP 

UPDATE INNER HTML OF HIT SHIP

GAMEOVER WHEN ALL ZERO OR MOTHER SHIP HIT 

INSTRUCTIONS BUTTON AND PLAY AGAIN

WINNING MODAL*/

const fireBtn = document.querySelector("#fire-btn");
let ships = [];

class Ship {
    constructor(shipType, shipName, totalPoints, attackDamage) {
        this.shipType = shipType;
        this.shipName = shipName;
        this.totalPoints = totalPoints;
        this.attackDamage = attackDamage;
    }

    buildShip(numberOfShips) {
        for (let index = 0; index < numberOfShips; index++) {
            ships.push(this.shipType);
            document.querySelector(`.${this.shipType}`).innerHTML += `<div class="ship" id="${this.shipType}${index}"><h5>${this.shipName}</h5> <p>Points: ${this.totalPoints}</p></div>`
        }
    }

    hitShip() {
        totalPoints -= this.hitPoints;
    }
}

const motherShip = new Ship("mothership", "Mother Ship", 100, 9);
const defenceShip = new Ship("defence", "Defence Ship", 80, 10);
const attackShip = new Ship("attack", "attack Ship", 45, 12);

motherShip.buildShip(1);
defenceShip.buildShip(5);
attackShip.buildShip(8);


const getRandomShip = () => {
    const randomIndex = Math.floor(Math.random) * ships.length;
    const randomShip = ships[randomIndex];
    return randomShip;
}


fireBtn.addEventListener(("click"), getRandomShip);
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
let randomShip = "";
class Ship {
    constructor(shipType, shipName, totalPoints, attackDamage) {
        this.shipType = shipType;
        this.shipName = shipName;
        this.totalPoints = totalPoints;
        this.attackDamage = attackDamage;
    }

    // buildShip(numberOfShips) {
    //     for (let index = 0; index < numberOfShips; index++) {
    //         ships.push(`${this.shipType}${index}`);
    //         document.querySelector(`.${this.shipType}`).innerHTML += `<div class="ship" id="${this.shipType}${index}"><h5>${this.shipName}</h5> <p>Points: ${this.totalPoints}</p></div>`
    //     }
    // }

    hitShip(index) {
        // console.log(this.attackDamage)
        console.log(index)
        console.log(this.shipType)
        this.totalPoints -= this.attackDamage;
        this.totalPoints >= 0 ? this.totalPoints = this.totalPoints : this.totalPoints = 0;
        document.querySelector(`#${this.shipType}${index}`).innerHTML = `<h5>${this.shipName}</h5> <p>Points: ${this.totalPoints}</p>`;
    }

    // checkPoints() totalPoints
}

const buildShips = (indexStart, shipType, shipName, totalPoints, attackDamage, numberOfShips) => {
    for (let index = indexStart; index < (indexStart + numberOfShips); index++) {
        ships.push(new Ship(shipType, shipName, totalPoints, attackDamage));
        document.querySelector(`.${shipType}`).innerHTML += `<div class="ship" id="${shipType}${index}"><h5>${shipName}</h5> <p>Points: ${totalPoints}</p></div>`;
    }
}
// Create instances of the ship class
// const motherShip = new Ship("mothership", "Mother Ship", 100, 9);
// const defenceShip = new Ship("defence", "Defence Ship", 80, 10);
// const attackShip = new Ship("attack", "attack Ship", 45, 12);

// Use the ship objects to render the ships
// motherShip.buildShip(1);
// defenceShip.buildShip(5);
// attackShip.buildShip(8);

buildShips(0, "mothership", "Mother Ship", 100, 9, 1);
buildShips(1, "defence", "Defence Ship", 80, 10, 5);
buildShips(6, "attack", "attack Ship", 45, 12, 8);
console.log(ships)

const getRandomIndex = () => {
    // console.log(ships.length)
    const randomIndex = Math.floor(Math.random()* ships.length);
    // console.log(randomIndex)
    // randomShip = ships[randomIndex];
    // console.log(randomShip);
    return randomIndex;
    
}

fireBtn.addEventListener("click", () => {
    // console.log(getRandomShip())
    let hitShipIndex = getRandomIndex();
    console.log(hitShipIndex)
    ships[hitShipIndex].hitShip(hitShipIndex);
    // getRandomShip().hitShip();
});
console.log(ships)
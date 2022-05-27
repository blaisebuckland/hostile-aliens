/* HOSTILE ALIENS


OOP 

MAKING OUR SHIPS - CLASS OF SHIP - EXTEND FOR HIT TYPE. PARAMETERS - STATRTING POINTS, LOSS INCREMENT

BUTTON - ON CLICK HIT A RANDOM SHIP - RANDOMISER FOR ALL SHIPS THAT WILL NOT SELECT  A SHIP AT 0 POINT ALREADY

WHEN HIT, DECREASE POINTS OR GAME OVER IF MOTHER SHIP 

UPDATE INNER HTML OF HIT SHIP

GAMEOVER WHEN ALL ZERO OR MOTHER SHIP HIT 

INSTRUCTIONS BUTTON AND PLAY AGAIN

WINNING MODAL*/

const motherShip = document.querySelector(".mother-ship");
const defence = document.querySelector(".defence");
const attack = document.querySelector(".attack");

const renderShips = (shipType, numberOfShips) => {
    for (let index = 0; index < numberOfShips; index++) {
        if (shipType === motherShip) {
            let totalPoints = 100;
            shipType.innerHTML += `<div class="ship" id="${shipType}"><h5>Mother Ship</h5> <p>Points: ${totalPoints}</p></div>`
        } else if (shipType === defence) {
            let totalPoints = 80;
            shipType.innerHTML += `<div class="ship" id="${shipType}"><h5>Defence Ship</h5> <p>Points: ${totalPoints}</p></div>`
        } else if (shipType === attack) {
            let totalPoints = 45;
            shipType.innerHTML += `<div class="ship" id="${shipType}"><h5>Attack Ship</h5> <p>Points: ${totalPoints}</p></div>`
        }
    }
}

renderShips(motherShip, 1);
renderShips(defence, 5);
renderShips(attack, 8);

class Ship {
    constructor(hitPoints, totalPoints) {
        this.hitPoints = hitPoints;
        this.totalPoints;
    }
}
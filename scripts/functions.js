export class Ship {
    constructor(shipType, shipName, totalPoints, attackDamage) {
        this.shipType = shipType;
        this.shipName = shipName;
        this.totalPoints = totalPoints;
        this.attackDamage = attackDamage;
    }

    reducePoints() {
        this.totalPoints -= this.attackDamage;
        if (this.totalPoints < 0) {
            this.totalPoints = 0;
        }
    }
}

export const getRandomIndex = (ships) => {
    const randomIndex = Math.floor(Math.random()* ships.length);
    return randomIndex;
}
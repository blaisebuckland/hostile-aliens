import {Ship, getRandomIndex} from "./functions.js"

const mothership = new Ship ("mothership", "Mother Ship", 100, 9);
const defenceShip = new Ship ("defence", "Defence Ship", 80, 10);
const attackShip = new Ship ("attack", "Attack Ship", 45, 12);
const ships = [{shipType: "mothership", shipName: "Mother Ship", totalPoints: 100, attackDamage: 9},
    {shipType: "defence", shipName: "Defence Ship", totalPoints: 80, attackDamage: 10}, 
    {shipType: "attack", shipName: "Attack Ship", totalPoints: 45, attackDamage: 12}];

// Test ships are built correctly
it ("Should create a new mpthership, with the correct parameters", () => {
    expect(mothership).toEqual({shipType: "mothership", shipName: "Mother Ship", totalPoints: 100, attackDamage: 9})
}),

it ("Should create a new defence ship, with the correct parameters", () => {  
    expect(defenceShip).toEqual({shipType: "defence", shipName: "Defence Ship", totalPoints: 80, attackDamage: 10})
}),

it ("Should create a new atatck ship, with the correct parameters", () => {
    expect(attackShip).toEqual({shipType: "attack", shipName: "Attack Ship", totalPoints: 45, attackDamage: 12})
}),

// Test ships lose correct number of points
it ("Should reduce total points by correct amount for mothership", () => {
    mothership.reducePoints()
    expect(mothership.totalPoints).toBe(91);
}),

it ("Should reduce total points by correct amount for defence ship", () => {
    defenceShip.reducePoints()
    expect(defenceShip.totalPoints).toBe(70);
}),

it ("Should reduce total points by correct amount for attack ship", () => {
    attackShip.reducePoints()
    expect(attackShip.totalPoints).toBe(33);
})

// Test getRandomIndex()
it("Should the getRandomIndex function returns a number", () => {
    expect(typeof(getRandomIndex(ships))).toBe("number");
})

it("Should the getRandomIndex function returns a number greater than or equal to 0", () => {
    expect(getRandomIndex(ships)).toBeGreaterThan(-1);
})

it("Should the getRandomIndex function returns a number less than or equal to ships array length", () => {
    expect(getRandomIndex(ships)).toBeLessThan(ships.length);
})
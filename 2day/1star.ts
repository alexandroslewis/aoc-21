import { movements } from "./movements";

let depth = 0;
let xPos = 0;
let answer3 = movements.reduce((carry, movement, index) => {
    const key = Object.keys(movement)[0];
    if (key === 'forward') {
        xPos += movement[key];
    }
    if (key === 'down') {
        depth += movement[key];
    }
    if (key === 'up') {
        depth -= movement[key];
    }
    if (index === movements.length - 1) {
        carry = xPos * depth;
        return carry;
    }
}, 0)

console.log(answer3)
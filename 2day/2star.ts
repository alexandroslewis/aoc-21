import { movements } from "./movements";

let depth = 0;
let aim = 0;
let posX = 0;

for (let i = 0; i < movements.length; i++) {
    let mObj = movements[i];
    let key = Object.keys(mObj)[0];
    let value = mObj[key];
    if (key === 'up') {
        aim -= value;
    }
    if (key === 'down') {
        aim += value;
    }
    if (key === 'forward') {
        posX += value;
        depth += value * aim;
    }
}

console.log(posX * depth)

 
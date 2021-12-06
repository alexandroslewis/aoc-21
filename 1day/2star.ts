import { depths } from "./depths";

let answer2 = depths.reduce((sum, depth, index) => {
    if (index !== 0 && index !== depths.length - 1) {
        let sumA = depths[index - 1] + depth + depths[index + 1];
        let sumB =  depth + depths[index + 1] + depths[index +2];
        if (sumB > sumA) {
            sum += 1;
        }
    }
    return sum;
}, 0);

console.log(answer2);

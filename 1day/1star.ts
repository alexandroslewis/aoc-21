import { depths } from './depths';

let answer1 = depths.reduce((sum, depth, index) => {
    let prevDepth = (index === 0) ? null : depths[index - 1];
    if (prevDepth) {
        if (depth > prevDepth) {
            sum += 1;
        }
    }
    return sum;
}, 0)

console.log(answer1);
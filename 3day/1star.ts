import { numbers } from "./numbers";

let dataStructure = numbers[0].toString().split('').reduce((obj, _, i) => {
    obj[i] = 0;
    return obj;
}, {})
let sums0 = {...dataStructure};
let sums1 = {...dataStructure};

for (let number of numbers) {
    let bits = number.split('');
    for (let i = 0; i < bits.length; i++) {
        let bit = bits[i];
        (bit === '0') ? sums0[i]++ : sums1[i]++;
    }
}

let gamma = Object.keys(dataStructure).reduce((carry, key) => {
    carry += (sums0[key] > sums1[key]) ? '0' : '1';
    return carry;
}, '');

let epsilon = gamma.split('').map(b => {
    return (b === '0') ? '1' : '0';
}).join('');

console.log(`${gamma}\n${epsilon}`)

//1816 * 2279
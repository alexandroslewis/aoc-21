import { numbers } from "./numbers";

const length = numbers[0].length;

function getOxygen() {
    let arr = [...numbers];
    for (let i = 0; i < length; i++) {
        let sum0 = 0;
        let sum1 = 0;
        if (arr.length > 1) {
            for (let number of arr) {
                let bit = number[i];
                (bit === '0') ? sum0++ : sum1++
            }
            arr = (sum1 >= sum0) ? arr.filter(n => n[i] === '1') : arr.filter(n => n[i] === '0')
        } else {
            return arr[0]
        }
    }
}

function getCO2() {
    let arr = [...numbers];
    for (let i = 0; i < length; i++) {
        let sum0 = 0;
        let sum1 = 0;
        if (arr.length > 1) {
            for (let number of arr) {
                let bit = number[i];
                (bit === '0') ? sum0++ : sum1++
            }
            console.log(sum0, sum1)
            if (sum0 !== 0 && sum0 <= sum1) {
                console.log('sum0')
                arr = arr.filter(n => n[i] === '0')
            }
            if (sum1 !== 0 && sum1 < sum0) {
                console.log('sum1')
                arr = arr.filter(n => n[i] === '1')
            }
        } else {
            return arr[0];
        }
    }
}

const oxygen = getOxygen();
const CO2 = getCO2();

console.log(oxygen, CO2);
//2031 * 2104

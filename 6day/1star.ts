import obj from './fish';
const {test, fish} =  obj;
const days = 80;
let arr = [...fish];

for (let i = 1; i <= days; i++) {
    arr = arr.reduce((carry, timer) => {
        if (timer > 0) {
            carry.push(timer -1);
        }
        if (timer === 0) {
            carry.push(6);
            carry.push(8);
        }
        return carry;
    }, []);
}

console.log(arr.length)

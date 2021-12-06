import obj from "./boards";
const { draws, boards } = obj;
import { cloneDeep } from "lodash";
let dataStruct = cloneDeep(boards)

let checkBoards = (draw) => {
    for (let h in dataStruct) {
        let board = dataStruct[h];
        for (let i in board) {
            let row = board[i];
            let column = board.map(r => r[i]);
            let rowWin = row.every(n => n === '');
            let colWin = column.every(n => n === '');
            if (rowWin || colWin) {
                return {
                    board,
                    draw
                };
            }
        }
    }
    return null;
}

let runGame = () => {
    for (let h in draws) {
        let draw = draws[h];
        for (let i in boards) {
            let board = boards[i];
            for (let j in board) {
                let row = board[j];
                if (row.indexOf(draw.toString()) > -1) {
                    let k = row.indexOf(draw.toString());
                    dataStruct[i][j][k] = '';
                    let win = checkBoards(draw);
                    if (win) {
                        return win;
                    }
                }
            }
        }
    }
}

let procRes = (res) => {
    let sum = res.board.reduce((carry, arr) => {
        for (let n of arr) {
            if (n !== '') {
                carry += Number(n);
            }
        }
        return carry;
    }, 0);
    return sum * res.draw;
}

let res = runGame();

console.log(procRes(res))
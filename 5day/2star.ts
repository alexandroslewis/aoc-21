import obj from './positions';
const {test, positions} = obj;

const getGrid = () => {
    let highX = 0;
    let highY = 0;
    for (let i in positions) {
        let coors = positions[i];
        let xHigh = (Number(coors[0].split(',')[0]) > Number(coors[1].split(',')[0])) ? Number(coors[0].split(',')[0]) : Number(coors[1].split(',')[0]);
        let yHigh = (Number(coors[0].split(',')[1]) > Number(coors[1].split(',')[1])) ? Number(coors[0].split(',')[1]): Number(coors[1].split(',')[1]);
        highX = (highX > xHigh) ? highX : xHigh;
        highY = (highY > yHigh) ? highY : yHigh;
    }
    let grid = [];
    for (let y = 0; y <= highY; y++) {
        let row = [];
        for (let x = 0; x <= highX; x++) {
            row.push(0)
        }
        grid.push(row);
    }
    return grid;
}

const setLines = () => {
    let grid = getGrid();
    for (let coors of positions) {
        let x1 = Number(coors[0].split(',')[0]);
        let y1 = Number(coors[0].split(',')[1]);
        let x2 = Number(coors[1].split(',')[0]);
        let y2 = Number(coors[1].split(',')[1]);
        if (!(x1 !== x2 && y1 !== y2)) {
            let xDist = x2 - x1;
            let yDist = y2 - y1;
            if (yDist !== 0) {
                let length = (y2 > y1) ? y2 : y1;
                for (let i = (y2 > y1) ? y1 : y2; i <= length; i++) {
                    grid[i][x1]++;
                }
            }
            if (xDist !== 0) {
                let length = (x2 > x1) ? x2 : x1;
                for (let i = (x2 > x1) ? x1 : x2; i <= length; i++) {
                    grid[y1][i]++;
                }
            }
        }
        if (x1 !== x2 && y1 !== y2) {
            let xDist = x2 - x1;
            let yDist = y2 - y1;
            if (yDist < 0) {
                for (let y = y1; y >= y2; y--) {
                    if (xDist < 0) {
                        grid[y][x1]++;
                        x1--;
                    } else {
                        grid[y][x1]++;
                        x1++;
                    }
                }
            }
            if (yDist > 0) {
                for (let y = y1; y <= y2; y++) {
                    if (xDist < 0) {
                        grid[y][x1]++;
                        x1--;
                    } else {
                        grid[y][x1]++;
                        x1++;
                    }
                }
            }
        }
    }
    return grid
}

const checkOverlaps = (grid) => {
    let count = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] > 1) {
                count ++;
            }
        }
    }
    return count;
}

console.log(checkOverlaps(setLines()))

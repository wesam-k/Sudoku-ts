import global from "../../global";
import { GRID, NUMBERS } from "../../typings";
import {
  checkGrid,
  identifySquare,
  isInCol,
  isInRow,
  isInSquare,
} from "../../utils";

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function solveGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    col = i % 9;
    row = Math.floor(i / 9);
    if (grid[row][col] === 0) {
      // eslint-disable-next-line prefer-const
      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ col, grid, value })) {
            const square = identifySquare({ col, grid, row });
            if (!isInSquare({ square, value })) {
              grid[row][col] = value;
              if (checkGrid(grid)) {
                global.counter++;
                break;
              } else if (solveGrid(grid)) {
                return true;
              }
            }
          }
        }
        break;
      }
    }
  }

  grid[row][col] = 0;
}

export default solveGrid;

/* eslint-enable */

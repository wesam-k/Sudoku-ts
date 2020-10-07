import  { GRID } from '../../typings'
import global  from '../../global'
import { getRandomIndex, solveGrid, copyGrid } from '../../utils'

function removeNumbers(grid: GRID, attempts = 5 ): GRID {
    while (attempts > 0){
        let row = getRandomIndex()
        let col = getRandomIndex()
    

    while (grid[row][col] === 0) {
         row = getRandomIndex()
         col = getRandomIndex()
    }

    const backUp = grid[row][col]
    grid[row][col] = 0

    const gridCopy = copyGrid(grid)

    global.counter = 0 
    solveGrid(gridCopy) 

    
    if(global.counter !== 1 ) {
        grid[row][col] = backUp
        attempts--
    }
}
    return grid
}

export default removeNumbers


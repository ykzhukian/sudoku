
const SEED_SUDOKU = [
	[8, 7, 4, 6, 3, 1, 5, 9, 2],
	[5, 9, 6, 7, 2, 8, 4, 3, 1],
	[2, 3, 1, 4, 5, 9, 6, 8, 7],
	[4, 8, 2, 1, 9, 6, 7, 5, 3],
	[7, 6, 5, 3, 8, 4, 2, 1, 9],
	[9, 1, 3, 5, 7, 2, 8, 4, 6],
	[3, 2, 9, 8, 6, 5, 1, 7, 4],
	[1, 5, 7, 2, 4, 3, 9, 6, 8],
	[6, 4, 8, 9, 1, 7, 3, 2, 5]
]

function printSudoku(array) {
	array.forEach(function(row, index) {
    	let rowStr = '';
		row.forEach(function(num, index) {
			rowStr += ' ' + num;
		});
		console.log(rowStr);
    });
}

function swapNumbers(sudoku) {

	let currentSudoku = sudoku;
    let swapNumberA = Math.ceil(Math.random() * 9);
    let swapNumberB = Math.ceil(Math.random() * 9);

    console.log(swapNumberA + ' --> ' + swapNumberB);

    return currentSudoku.map(function(row, index) {

    	let numIndexA = row.indexOf(swapNumberA);
    	let numIndexB = row.indexOf(swapNumberB);

    	row[numIndexA] = swapNumberB;
    	row[numIndexB] = swapNumberA;

    	return row;
    });

}

const Mixin = {
  newSudoku() {
    console.log('-------------------- Sudoku ----------------------');

    printSudoku(SEED_SUDOKU);

    // Swap numbers
    let currentSudoku = swapNumbers(SEED_SUDOKU);

    // Swap 15 times
    console.log('-------------------- Swap number 15 times ----------------------');
    for (var i = 15; i >= 0; i--) {
    	currentSudoku = swapNumbers(currentSudoku);
    }

    printSudoku(currentSudoku);

    // Swap rows & columns
    


  }
};


export default Mixin;

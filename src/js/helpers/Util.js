
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

function swapRows(blockIndex, sudoku) {

	let currentSudoku = sudoku;
    let indexRowA = Math.floor(Math.random() * 3) + blockIndex * 3;
    let indexRowB = Math.floor(Math.random() * 3) + blockIndex * 3;

    console.log(indexRowA + ' --> ' + indexRowB);
    let temp = currentSudoku[indexRowA];
    currentSudoku[indexRowA] = currentSudoku[indexRowB];
    currentSudoku[indexRowB] = temp;

    return currentSudoku;

}

function swapColumns(blockIndex, sudoku) {

	let currentSudoku = sudoku;
    let indexColA = Math.floor(Math.random() * 3) + blockIndex * 3;
    let indexColB = Math.floor(Math.random() * 3) + blockIndex * 3;

    console.log(indexColA + ' --> ' + indexColB);

    return currentSudoku.map(function(row, index) {

    	let temp = row[indexColA];

    	row[indexColA] = row[indexColB];
    	row[indexColB] = temp;

    	return row;
    });

}

const Mixin = {
  newSudoku() {
    console.log('-------------------- Sudoku ----------------------');

    // Swap numbers
    let currentSudoku = swapNumbers(SEED_SUDOKU);

    // Swap 15 times
    console.log('-------------------- Swap number 15 times ----------------------');
    for (let i = 15; i >= 0; i--) {
    	currentSudoku = swapNumbers(currentSudoku);
    }

    // Swap rows & columns
    console.log('-------------------- Swap Rows ----------------------');
    for (let i = 2; i >= 0; i--) {
    	currentSudoku = swapRows(i, currentSudoku);
    	currentSudoku = swapRows(i, currentSudoku);
    }

    console.log('-------------------- Swap Columns ----------------------');

    for (let i = 2; i >= 0; i--) {
    	currentSudoku = swapColumns(i, currentSudoku);
    	currentSudoku = swapColumns(i, currentSudoku);
    }

    printSudoku(currentSudoku);

    return currentSudoku;

  }
};


export default Mixin;

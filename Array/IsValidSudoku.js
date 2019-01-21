/**
 * 有效数独
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/30/
 */

var isValidSudoku = function(board) {
    let rows = [];
	let cols = [];
	let cells = [];
	for (var i = 0; i < 9; i++) {
		rows[i] = new Array(9);
		cols[i] = new Array(9);
		cells[i] = new Array(9);
	}

	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			let k = board[i][j];
			if (k == ".") continue;

			let kIndex = k-"1";
			let cellIndex = 3*parseInt(i/3)+parseInt(j/3);
			if (rows[i][kIndex] || cols[j][kIndex] || cells[cellIndex][kIndex]) {
				return false;
			} else {
				rows[i][kIndex] = true;
				cols[j][kIndex] = true;
				cells[cellIndex][kIndex] = true;
			}
		}
	}

	return true;
};


let digits = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(digits));



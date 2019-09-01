/**
 * 旋转图像
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/31/
 */

var rotate = function(matrix) {
	let n = matrix[0].length-1;
    for (var i = 0; i < n/2; i++) {
    	for (var j = i; j < n-i; j++) {
    		let num = matrix[i][j];
    		matrix[i][j] = matrix[n-j][i]; 
    		matrix[n-j][i] = matrix[n-i][n-j];
    		matrix[n-i][n-j] = matrix[j][n-i];
    		matrix[j][n-i] = num;
    	}
    }
    return matrix;
};


let digits = [
  [7,4,1],
  [8,5,2],
  [9,6,3]
];

console.log(rotate(digits));



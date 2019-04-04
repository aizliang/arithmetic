/**
 * 杨辉三角形
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/26/others/67/
 */

var generate = function(numRows) {
    if (!numRows || numRows == 0) return [];
    if (numRows == 1) return [[1]];

    var generateRow = [[1]];
    for (var i = 1; i < numRows; i++) {
        var currentRow = [1];
        var preRow = generateRow[i-1];

        for (var j = 0; j < preRow.length-1; j++) {
            currentRow.push(preRow[j]+preRow[j+1]);
        }

        currentRow.push(1);
        generateRow.push(currentRow);
    }

    return generateRow
};

console.log(generate(5));



/**
 * 汉明距离
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/26/others/65/
 */

var hammingDistance = function(x, y) {
    var n = x^y;
    return hammingWeight(n);
}

var hammingWeight = function (n) {
    var oneCount = 0;
    while(n) {
        n &= (n-1);
        oneCount++;
    }

    return oneCount;
}

console.log(hanmmingDistance(0b010, 0b111));



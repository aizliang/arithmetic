/**
 * 位1的个数
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/26/others/64/
 */

var hammingWeight = function (n) {
    var oneCount = 0;
    while(n) {
        n &= (n-1);
        oneCount++;
    }

    return oneCount;
}

console.log(hammingWeight(0b1001110));



/**
 * 3的幂
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/62/
 */

var isPowerOfThree = function(n) {
    if (n <= 0) return  false;
    var maxPowerValue = Math.pow(3, Math.floor(Math.log(0x7fffffff)/Math.log(3)));
    return (maxPowerValue % n == 0);
};

console.log(isPowerOfThree(-3));

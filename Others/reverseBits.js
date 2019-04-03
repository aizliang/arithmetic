/**
 * 颠倒二进制位
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/26/others/66/
 */

// var reverseBits = function(n) {
//     var s = n.toString(2);
//     var reverseS = '';
 
//     for (var i = s.length-1; i >= 0; i--) {
//         reverseS += s[i];
//     }

//     for (var i = 0; i < 32-s.length; i++) {
//         reverseS += 0;
//     }
    
//     return parseInt(reverseS, 2);
// };

/**
 * 分治解法
 * 最小模型的时候，交换两位
 */
var reverseBits = function(n) {
    n = (n >>> 16) | (n << 16);
    n = ((n & 0xff00ff00) >>> 8) | ((n & 0x00ff00ff) << 8);
    n = ((n & 0xf0f0f0f0) >>> 4) | ((n & 0x0f0f0f0f) << 4);
    n = ((n & 0xcccccccc) >>> 2) | ((n & 0x33333333) << 2);
    n = ((n & 0xaaaaaaaa) >>> 1) | ((n & 0x55555555) << 1);
    return n;
};

console.log(reverseBits(0b00000010100101000001111010011100 ));



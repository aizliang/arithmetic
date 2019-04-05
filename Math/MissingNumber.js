/**
 * 缺失数字
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/65/
 */


// var missingNumber = function(nums) {
//     if (!nums || nums.length == 0) return undefined;

//     for (var i = 0; i < nums.length+1; i++) {
//        if (nums.indexOf(i) == -1) {
//             return i;
//        }
//     }

//     return undefined;
// }

//求和做差
// var missingNumber = function(nums) {
//     if (!nums || nums.length == 0) return undefined;

//     var expectSum = 0;
//     var currentSum = 0;

//     for (var i = 0; i < nums.length+1; i++) {
//        expectSum += i;
//     }

//     for (var i = 0; i < nums.length; i++) {
//         currentSum += nums[i];
//     }

//     return expectSum - currentSum;
// }

//异或
var missingNumber = function(nums) {
    if (!nums || nums.length == 0) return undefined;

    var num = nums.length;
    for (var i = 0; i < nums.length; i++) {
        num ^= i;
        num ^= nums[i];
    }

    return num;
}

console.log(missingNumber([8,6,4,2,3,5,7,0,1]));



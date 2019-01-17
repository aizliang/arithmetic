
/**
 *  重复元素
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/24/
 */


var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};


let nums = [1,2,3,1];
console.log(containsDuplicate(nums));
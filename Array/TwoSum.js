/**
 * 两数之和
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/29/
 */

var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
    	let value = target - nums[i];
    	let index = nums.indexOf(value);
    	if (index != -1 && i != index) {
    		return [i, index];
    	}
    }
    return [];
};


let digits =[3,2,4];
console.log(twoSum(digits, 6));



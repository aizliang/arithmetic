
/**
 *  只出现一次的数字
 *  source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/25/
 */


var singleNumber = function(nums) {
	var singleValue = 0;
	for (var i = 0; i < nums.length; i++) {
		singleValue ^= nums[i];
	}
	return singleValue;
};

let nums = [1,2,2,3,1];
console.log(singleNumber(nums));
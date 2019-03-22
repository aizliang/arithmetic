/**
 * 最大子序和
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/23/dynamic-programming/56/
 */
 
//动态规划
var maxSubArray = function(nums) {
	if (!nums || nums.length == 0) return 0;

	var maxSum = nums[0];
	var lastMax = 0;

	for (var i = 0; i < nums.length; i++) {
		lastMax += nums[i];
		maxSum = Math.max(maxSum, lastMax);
		lastMax = Math.max(lastMax, 0);
	}

	return maxSum;
};


//分治
// var maxSubArray = function(nums) {
// 	if (!nums || nums.length == 0) return 0;

// 	if (nums.length == 1) return nums[0]; 

// 	let midIndex = Math.floor(nums.length/2);
// 	let leftMax = maxSubArray(nums.slice(0, midIndex));
// 	let rightMax = maxSubArray(nums.slice(midIndex, nums.length+1));

// 	let linkLeftMax = nums[midIndex-1];
// 	let linkRightMax = nums[midIndex];

// 	let linkLeftSum = nums[midIndex-1];
// 	let linkRightSum = nums[midIndex];

// 	for (var i = (midIndex-2); i >= 0; i--) {
// 		linkLeftSum += nums[i];
// 		linkLeftMax = Math.max(linkLeftMax, linkLeftSum);
// 	}

// 	for (var i = (midIndex+1); i < nums.length; i++) {
// 		linkRightSum += nums[i];
// 		linkRightMax = Math.max(linkRightMax, linkRightSum);
// 	}

// 	let maxValue = Math.max(leftMax, rightMax, linkLeftMax+linkRightMax);
// 	return maxValue;
// }

var values = [-2,-1,-3,-1,2];
console.log(maxSubArray(values));
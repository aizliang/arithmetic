/**
 * 打家劫舍
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/23/dynamic-programming/57/
 */
 
var rob = function(nums) {
	if (!nums) return 0;

	let maxSum = 0;
	let preMaxSum = 0;
	let twoForwardMaxSum = 0;

	for (var i = 0; i < nums.length; i++) {
		maxSum = Math.max(twoForwardMaxSum + nums[i], preMaxSum);
		twoForwardMaxSum = preMaxSum;
		preMaxSum = maxSum;
	}

	return maxSum;
}

var values = [2,1,1,2];
console.log(rob(values));
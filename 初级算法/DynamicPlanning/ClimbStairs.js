/**
 * 爬楼梯
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/23/dynamic-programming/54/
 */
 
var climbStairs = function(n) {
	var resultArray = [0,1,2];
	for (var i = 3; i <= n; i++) {
		resultArray[i] = resultArray[i-1] + resultArray[i-2];
	}
	return resultArray[n];
};

console.log(climbStairs(3));
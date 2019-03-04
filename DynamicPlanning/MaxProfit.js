/**
 * 最大收益
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/23/dynamic-programming/55/
 */
 
var maxProfit = function(prices) {
	if (!prices || prices.length == 0 || prices.length == 1) return 0;

	var profit = 0;
	var minValue = prices[0];
	for (var i = 1; i < prices.length; i++) {
		profit = Math.max(profit, prices[i] - minValue);
		minValue = Math.min(minValue, prices[i]);
	}

	return profit;
};

var values = [1,7,8,9,5,3,9];
console.log(maxProfit(values));
/**
 * 买卖股票的最佳时机
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/22/
 */

var maxProfit = function(prices) {
    if (prices <= 1) return 0;
    
    var profit = 0;
    var prePrice = prices[0];

    for (var i=0; i<prices.length; i++) {
    	var currentPrice = prices[i];

    	if (prePrice < currentPrice) {
    		profit += currentPrice-prePrice;
    	}
    	prePrice = currentPrice;
    }

    return profit;
};

var values = [7,1,5,8,3,2,6,4];
console.log(maxProfit(values));
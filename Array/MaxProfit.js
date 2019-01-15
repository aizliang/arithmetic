/**
 * 买卖股票的最佳时机
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/22/
 */

var maxProfit = function(prices) {
    if (prices <= 1) return 0;
    
    var profit = 0;
    // var tempBuyPrice = prices[0];
    // var buyPrice = 0;
    // var sellPrice = 0;
    var prePrice = prices[0];

    for (var i=0; i<prices.length; i++) {
    	var currentPrice = prices[i];

    	if (prePrice < currentPrice) {
    		profit += currentPrice-prePrice;
    	}

    	prePrice = currentPrice;
  //   	if (buyPrice == 0) {
  //   		if (currentPrice < tempBuyPrice) {
  //   			tempBuyPrice = currentPrice;
  //   		} else {

  //   		}
  //   	}

  //   	if (currentPrice > sellPrice) {
  //   		sellPrice = currentPrice;
  //   	} 

  //   	if ((sellPrice > buyPrice) && (sellPrice > currentPrice)) {
  //   		profit += (sellPrice-buyPrice);
  //   		buyPrice = currentPrice;
  //   		sellPrice = currentPrice;
  //   	}

  //   		if ((i==(prices.length-1) && currentPrice == sellPrice && buyPrice < sellPrice)) {
		// 	 profit += (sellPrice-buyPrice);
		// }
    }

    return profit;
};

var values = [7,1,5,8,3,2,6,4];
console.log(maxProfit(values));
/**
 * 买卖股票的最佳时机 II
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/22/
 */
import Foundation

class Solution {
    func maxProfit(_ prices: [Int]) -> Int {
        guard prices.count > 1 else {
            return 0
        }
        
        var maxProfit = 0
        
        for i in 1..<prices.count {
            maxProfit += max(0, prices[i]-prices[i-1])
        }
        
        return maxProfit
    }
}

let prices = [7,6,4,3,1]
print(Solution().maxProfit(prices))



/**
 * 爬楼梯
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/23/dynamic-programming/54/
 */

import Foundation

class Solution {
    func climbStairs(_ n: Int) -> Int {
        guard  n > 0 else {
            return 0
        }
        
        if n <= 3 {
            return n
        }
        
        var pre_2 = 2
        var pre_1 = 3
        var currentStep = 0
        
        for _ in 4...n {
            currentStep = pre_1 + pre_2
            pre_2 = pre_1
            pre_1 = currentStep
        }
        
        return currentStep
    }
}

let n = 4
print(Solution().climbStairs(n))

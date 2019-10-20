/**
 * 求众数
 * source：https://leetcode-cn.com/problems/majority-element/
 */

import Foundation

class Solution {
    func majorityElement(_ nums: [Int]) -> Int {
        guard nums.count > 0 else {
            return 0
        }
        
        var numCount = [Int: Int]()
        var maxCount = 0
        var majorityNum = nums[0]
        
        for num in nums {
            numCount[num] = (numCount[num] ?? 0) + 1
            
            if (numCount[num] ?? 0) > maxCount {
                maxCount = numCount[num] ?? 0
                majorityNum = num
            }
        }
        
        return majorityNum
    }
}

let array = [1, 2, 3, 3, 3]
print(Solution().majorityElement(array))



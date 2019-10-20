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

//官方解题中的投票法，利用了题目中众数数量 > n/2 这个条件，空间复杂度为 O(1)
class Solution2 {
    func majorityElement(_ nums: [Int]) -> Int {
        guard nums.count > 0 else {
            return 0
        }
        
        var majorityNum = nums[0]
        var value = 1
        for i in 1..<nums.count {
            let num = nums[i]
            
            if value == 0 {
                majorityNum = num
                value = 1
                continue
            }
            
            if num == majorityNum {
                value += 1
            } else {
                value -= 1
            }
        }
        
        return majorityNum
    }
}

let array = [1, 2, 3, 3, 3]
print(Solution().majorityElement(array))
print(Solution2().majorityElement(array))

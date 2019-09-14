/**
 * 从排序数组中删除重复项
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/21/
 */
import Foundation

class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        guard nums.count > 1 else {
            return nums.count
        }
        
        var len = 0
        for i in 0..<nums.count {
            if nums[len] < nums[i] {
                len += 1
                nums[len] = nums[i]
            }
        }
        
        return len + 1
    }
}


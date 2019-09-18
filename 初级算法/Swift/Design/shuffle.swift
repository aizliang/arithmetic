/**
 * Shuffle an Array
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/24/design/58/
 */

import Foundation

class Solution {
    var nums: [Int]
    var output: [Int]
    
    init(_ nums: [Int]) {
        self.nums = nums
        self.output = nums
    }
    
    func reset() -> [Int] {
        return self.output
    }
    
    func shuffle() -> [Int] {
        guard nums.count > 1 else {
            return self.output
        }
        
        for i in 0..<nums.count {
            let randomIndex = Int.random(in: 0..<nums.count)
            let currentNum = nums[i]
            nums[i] = nums[randomIndex]
            nums[randomIndex] = currentNum
        }
        
        return nums
    }
}


//Your Solution object will be instantiated and called as such:
let nums = [1, 2, 3]
let obj = Solution(nums)
let ret_2: [Int] = obj.shuffle()
let ret_1: [Int] = obj.reset()

print(ret_1, ret_2)

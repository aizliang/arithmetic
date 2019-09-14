/**
 * 反转字符串
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/32/
 */

import Foundation

class Solution {
    func reverseString(_ s: inout [Character]) {
        for i in 0..<s.count/2 {
            let swapIndex = s.count-1-i
            let temp = s[i]
            s[i] = s[swapIndex]
            s[swapIndex] = temp
        }
    }
}

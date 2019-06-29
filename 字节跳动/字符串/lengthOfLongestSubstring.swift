/**
 * 无重复字符的最长子串
 * https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1012/
 */


import Foundation

class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var longestValue = 0
        var subString = ""
        
        for char in s {
            if let index = subString.firstIndex(of: char) {
                let removeRange = subString.startIndex...index
                subString.removeSubrange(removeRange) 
            }
            
            subString.append(char)
            longestValue = max(longestValue, subString.count)
        }
        
        return longestValue
    }
}

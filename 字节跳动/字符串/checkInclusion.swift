/**
 * 字符串的排列
 * https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1016/
 */
import Foundation

class Solution {
    func checkInclusion(_ s1: String, _ s2: String) -> Bool {
        guard s1.count > 0 else {
            return false
        }
        
        guard s1.count <= s2.count else {
            return false
        }
        
        let s1Chars = Array(s1.unicodeScalars)
        let s2Chars = Array(s2.unicodeScalars)
        
        var s1Array = Array.init(repeating: 0, count: 26)
        var s2Array = Array.init(repeating: 0, count: 26)
        
        for index in 0..<s1Chars.count {
            let char1 = s1Chars[index]
            let char2 = s2Chars[index]
            
            s1Array[Int(char1.value-97)] += 1
            s2Array[Int(char2.value-97)] += 1
        }
        
        if (s1Array == s2Array) {
            return true
        }
        
        let countDistance = s2Chars.count - s1Chars.count
        
        if countDistance == 0 {
            return false
        }
        
        for index in 1...countDistance {
            let preBegin = s2Chars[index-1]
            let newEnd = s2Chars[(s1.count-1)+index]
            
            s2Array[Int(preBegin.value - 97)] -= 1
            s2Array[Int(newEnd.value - 97)] += 1
            
            if (s1Array == s2Array) {
                return true
            }
        }
        
        return false
    }
}

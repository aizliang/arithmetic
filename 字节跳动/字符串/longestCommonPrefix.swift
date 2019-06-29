/**
 * 公共最长前缀
 * source: https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1014/
 */

import Foundation

class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        guard strs.count > 0 else { return "" }
        
        var commonPrefit = String()
        let firstStrArray = Array(strs[0])
        
        for char in firstStrArray {
            commonPrefit.append(char)
            for strIndex in 1..<strs.count {
                let currentStr: String = strs[strIndex]
                if (!currentStr.hasPrefix(commonPrefit)) {
                    commonPrefit.removeLast();
                    return commonPrefit
                }
            }
        }
        return commonPrefit
    }
}



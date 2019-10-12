/**
 * Excel表列序号
 * 参考资料：https://leetcode-cn.com/problems/excel-sheet-column-number/
 */

import Foundation

class Solution {
    func titleToNumber(_ s: String) -> Int {
        var string = s
        var value = 0
        
        while string.count > 0 {
            let character: Character = string.first!
            let n = character.asciiValue! - Character.init("A").asciiValue! + 1
            value  = value * 26 + Int(n)
            string.removeFirst()
        }
        
        return value
    }
}

print(Solution().titleToNumber("ZY"))



/**
 * 整数反转
 * 参考资料：https://leetcode-cn.com/problems/reverse-integer/
 */


import Foundation

// 注意溢出的判断，正负整数的处理

class Solution {
    func reverse(_ x: Int) -> Int {
        var tempN = x
        var reverseN = 0
        
        while tempN != 0 {
            // int32.max 最后一位是 7，int32.min 最后一位是 8
            if (reverseN > Int32.max/10) || (reverseN == Int32.max/10 && tempN > 7) {
                return 0
            }
            
            if (reverseN < Int32.min/10) || (reverseN == Int32.min/10 && tempN < -8) {
                return 0
            }
            
            let current = tempN % 10
            tempN = tempN / 10
            reverseN = reverseN*10 + current
        }
        
        return reverseN
    }
}

let n = -2147483412
print(Solution().reverse(n))



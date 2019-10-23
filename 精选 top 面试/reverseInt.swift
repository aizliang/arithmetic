/**
 * 整数反转
 * 参考资料：https://leetcode-cn.com/problems/reverse-integer/
 */


import Foundation

class Solution {
    func reverse(_ x: Int) -> Int {
        var tempN = x
        var reverseN = 0
        
        while tempN != 0 {
            
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



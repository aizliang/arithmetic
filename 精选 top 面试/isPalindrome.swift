/**
* 回文数
* source：https://leetcode-cn.com/problems/palindrome-number/
*/

import Foundation

class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        //排除负数，末尾位0但不是0的数
        if x < 0 || (x%10 == 0 && x != 0) {
            return false
        }
        
        var preNum = x
        var revertNum = 0
        
        while revertNum < preNum {
            revertNum = revertNum*10 + preNum%10
            preNum = preNum / 10
        }
        
        //分别判断奇数位和偶数位回文数，例如：1221，121
        return revertNum == preNum || revertNum/10 == preNum
    }
}

let x = 100
print(Solution().isPalindrome(x))

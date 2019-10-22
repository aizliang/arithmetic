/**
 * 快乐数
 * 参考资料：https://leetcode-cn.com/problems/happy-number/
 */

import Foundation

// 快乐数有个特性，如果不能得出 1，会进入 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 的循环中。
// 由于这个特性，就可以用快慢指针来判断是否是快乐数了。(快慢指针也是判断链表是否有环的方法)

class Solution {
    func isHappy(_ n: Int) -> Bool {
        var fast = n
        var slow = n
        
        while  fast.next().next() != 1 {
            fast = fast.next().next()
            slow = slow.next()
            
            if fast == slow {
                return false
            }
        }
        
        return true
    }
    
}

extension Int  {
    func next() -> Int {
        var current = self
        var sum = 0
        while current > 0 {
            let value = current % 10
            current = current / 10
            sum += (value * value)
        }
        return sum
    }
}

let n = 10
print(Solution().isHappy(n))



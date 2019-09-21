/**
 * 位 1 的个数
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/26/others/64/
 */

import Foundation

func hammingWeight (n: Int) -> Int {
    var count = 0
    var nValue = n
    while nValue > 0 {
        count += 1
        nValue &= (nValue - 1)
    }
    
    return count
}

let n = 15
print(hammingWeight(n: n))

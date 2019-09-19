/**
 * Fizz Buzz
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/60/
 */

import Foundation

class Solution {
    func fizzBuzz(_ n: Int) -> [String] {
        guard n >= 1 else {
            return []
        }
        
        var strings: [String] = []
        for i in 1...n {
            var nString = "\(i)"
            if i%3 == 0 && i%5 == 0 {
                nString = "FizzBuzz"
            } else if i%3 == 0 {
                nString = "Fizz"
            } else if i%5 == 0 {
                nString = "Buzz"
            }
            
            strings.append(nString)
        }
        
        return strings
    }
}


let n = 10
print(Solution().fizzBuzz(n))



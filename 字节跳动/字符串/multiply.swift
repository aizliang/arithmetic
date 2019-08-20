/**
 * 字符串相乘
 * https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1015/
 */

import Foundation

class Solution {
    
    func multiply(_ num1: String, _ num2: String) -> String {
        guard num1 != "0" && num2 != "0" else {
            return "0"
        }
        
        let num1Array = Array(num1)
        let num2Array = Array(num2)
        let zeroValue = "0".unicodeScalars.first!.value
        var products = Array.init(repeating: 0, count: num1Array.count+num2Array.count)
        var value = ""
        
        for  i in (0..<num1Array.count).reversed() {
            for j in (0..<num2Array.count).reversed() {
                let multiplier1 = Int(num1Array[i].unicodeScalars.first!.value - zeroValue)
                let multiplier2 = Int(num2Array[j].unicodeScalars.first!.value - zeroValue)
                let product = multiplier1 * multiplier2
                products[(num1Array.count-1-i) + (num2Array.count-1-j)] += product
            }
        }
        
        for i in 0..<products.count-1 {
            products[i+1] += products[i]/10
            products[i] = products[i]%10
            value = "\(products[i])" + value
        }
        
        return products[products.count-1] == 0 ? value : "\(products[products.count-1])" + value
    }
}

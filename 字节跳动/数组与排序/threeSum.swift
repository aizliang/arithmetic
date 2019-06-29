/**
 * 三数之和
 * source: https://leetcode-cn.com/explore/interview/card/bytedance/243/array-and-sorting/1020/
 */

import Foundation

class Solution {
    func threeSum(_ nums: [Int]) -> [[Int]] {
        guard nums.count > 2 else {
            return Array()
        }
        
        let sortedNums = nums.sorted(by: <)
        let minNum = sortedNums[0]
        let maxNum = sortedNums.last ?? 0
        
        if (maxNum < 0 || minNum > 0) {
            return Array()
        }
        
        var resultArray = Array<[Int]>()
        
        for index in 0..<(sortedNums.count-1) {
            let num = sortedNums[index]
            if (num > 0) {
                break
            }
            if (index>0 && sortedNums[index] == sortedNums[index-1]) {
                continue
            }
            
            var smallIndex = index+1
            var largeIndex = sortedNums.count-1
            
            while (smallIndex < largeIndex) {
                
                let smallNum = sortedNums[smallIndex]
                let largeNum = sortedNums[largeIndex]
                let sum = num + smallNum + largeNum
                
                if (sum == 0) {
                    resultArray.append([num, smallNum, largeNum])
                    
                    while(smallIndex < largeIndex && sortedNums[smallIndex] == sortedNums[smallIndex+1]) {
                        smallIndex += 1
                    }
                    
                    while(smallIndex < largeIndex && sortedNums[largeIndex] == sortedNums[largeIndex-1]) {
                        largeIndex -= 1
                    }
                    
                    smallIndex += 1
                    largeIndex -= 1
                    
                } else if (sum < 0) {
                    smallIndex += 1;
                } else {
                    largeIndex -= 1;
                }
            }
        }
        
        return resultArray
    }
}


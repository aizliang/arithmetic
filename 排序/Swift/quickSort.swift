/**
 * 快速排序
 * 参考资料：https://zh.wikipedia.org/wiki/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F
 */

import Foundation

func quickSort (nums: [Int]) -> [Int] {
    guard nums.count > 1 else {
        return nums
    }
    
    let middleValue = nums[nums.count/2]
    let smallNums = nums.filter{ $0 < middleValue}
    let middleNums = nums.filter{$0 == middleValue}
    let largeNums = nums.filter{$0 > middleValue}
    
    return quickSort(nums: smallNums) + middleNums + quickSort(nums: largeNums)
}

let nums = [3, 5, 6, 1, 9, 2]
print(quickSort(nums: nums))



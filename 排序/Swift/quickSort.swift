/**
 * 快速排序
 * 参考资料：http://bubkoo.com/2014/01/12/sort-algorithm/quick-sort/
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



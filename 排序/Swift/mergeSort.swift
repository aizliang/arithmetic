/**
 * 归并排序
 * 参考资料：https://zh.wikipedia.org/wiki/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F
 */

import Foundation

func merge(leftNums: [Int], rightNums: [Int]) -> [Int] {
    guard leftNums.count > 0 && rightNums.count > 0 else {
        return []
    }
    
    var sortNums: [Int] = []
    var leftIndex = 0
    var rightIndex = 0
    
    while leftIndex < leftNums.count && rightIndex < rightNums.count {
        if leftNums[leftIndex] < rightNums[rightIndex] {
            sortNums.append(leftNums[leftIndex])
            leftIndex += 1
        } else {
            sortNums.append(rightNums[rightIndex])
            rightIndex += 1
        }
        
        if leftIndex == leftNums.count {
            sortNums += rightNums[rightIndex..<rightNums.count]
        }
        
        if rightIndex == rightNums.count {
            sortNums += leftNums[leftIndex..<leftNums.count]
        }
    }
    
    return sortNums
}

func mergeSort(_ nums: [Int]) -> [Int] {
    guard nums.count > 1 else {
        return nums
    }
    
    let middleIndex: Int = nums.count / 2
    let leftNums = mergeSort(Array(nums[0..<middleIndex]))
    let rightNums = mergeSort(Array(nums[middleIndex..<nums.count]))
    
    return merge(leftNums: leftNums, rightNums: rightNums)
}



let nums = [3, 5, 6, 1, 9, 2]
print(mergeSort(nums))


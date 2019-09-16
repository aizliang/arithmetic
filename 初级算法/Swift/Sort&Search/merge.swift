/**
 * 合并两个有序数组
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/8/sorting-and-searching/52/
 */

import Foundation

class Solution {
    func merge(_ nums1: inout [Int], _ m: Int, _ nums2: [Int], _ n: Int) {
        guard m > 0 else {
            nums1 = nums2
            return
        }
        
        guard n > 0 else {
            return
        }
        
        var index1 = m-1
        var index2 = n-1
        var currentIndex = m+n-1
        
        while index1 >= 0 && index2 >= 0 && currentIndex >= 0 {
            if nums1[index1] > nums2[index2] {
                nums1[currentIndex] = nums1[index1]
                index1 -= 1
            } else {
                nums1[currentIndex] = nums2[index2]
                index2 -= 1
            }
            currentIndex -= 1
            
            if index1 < 0 {
                nums1[0...index2] = nums2[0...index2]
            }
        }
    }
}

var nums1 = [5,6,7,0,0,0]
let nums2 = [1,2,3]
Solution().merge(&nums1, 3, nums2, 3)
print(nums1)

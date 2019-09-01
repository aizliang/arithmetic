/**
 * 两个数组交集
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/26/
 */

var intersect = function(nums1, nums2) {
    var commonNum = [];
    if (nums1.length < nums2.length) {
    	[nums1. nums2] = [nums2, nums1];
    }

   	for (var i = 0; i < nums1.length; i++) {
   		let currentValue = nums1[i];
   		let indexValue = nums2.indexOf(currentValue);
   		if ( indexValue !== -1) {
   			commonNum.push(currentValue);
   			nums2.splice(indexValue, 1);
   		}
   	}
   	return commonNum;
}

var nums1 = [1,2,3,4,5,6,7,2];
var nums2 = [1,2,5,8,2];
console.log(intersect(nums1, nums2));


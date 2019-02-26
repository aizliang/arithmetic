/**
 * 合并两个有序数组
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/8/sorting-and-searching/52/
 */

var merge = function(nums1, m, nums2, n) {
	nums1.splice(m, n, ...nums2);
	nums1.sort(function(a,b) {
		return a-b;
	});
};

var nums1 = [1,2,3,0,0,0];
var nums2 = [2,5,6];
merge(nums1, 3, nums2, nums2.length);
console.log(nums1);

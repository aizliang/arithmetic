/**
 * 旋转数组
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/23/
 */

var rotate = function(nums, k) {
	if (nums.length == 0) return nums;
	if (k > nums) {
		k = k%nums;
	}
    if (k == 0) return nums;
   
    let tmp = nums.splice(nums.length-k, k);
    nums.splice(0,0,...tmp);
    return nums;
};

var nums = [1,2,3,4,5,6,7];
let k=3;
console.log(rotate(nums,k));
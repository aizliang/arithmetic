/**
 * 从排序数组中删除重复项
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/1/array/21/
 */

var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    var len = 0;
    for (var i=0; i<nums.length; i++) {
        if (nums[len] < nums[i]) {
            nums[++len] = nums[i];
        }
    }
    return len+1;
};
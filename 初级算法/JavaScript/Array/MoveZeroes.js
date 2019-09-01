/**
 * 移动零
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/28/
 */

var moveZeroes = function(nums) {
	let zeroesCount = 0;
	let index = 0
	while (index < nums.length) {
    	if (nums[index] == 0) {
    		zeroesCount++
    		nums.splice(index,1);
    	} else {
    		index++;
    	}
    }

    for (var i = 0; i < zeroesCount; i++) {
    	nums.push(0);
    }

    return nums;
};


let digits =[0,1,0,3,12];
console.log(moveZeroes(digits));



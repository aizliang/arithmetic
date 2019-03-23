/**
 * Shuffle an Array
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/24/design/58/
 */


var Solution = function(nums) {
 	this.nums = nums;
 	this.output = nums.slice();
};


Solution.prototype.reset = function() {
	this.output = this.nums.slice();
	return this.output;
};

Solution.prototype.shuffle = function() {
	if (!this.output || this.output.length == 0 || this.output.length == 1) return this.output;

    for (let i = 0; i < this.output.length; i++) {
    	let randomNum = Math.floor(Math.random() * this.output.length);

    	let tmp = this.output[randomNum];
    	this.output[randomNum] = this.output[i];
    	this.output[i] = tmp;
    }

    return this.output;
};

var nums = [1,2,3,4,5,6];
var obj = new Solution(nums);
var param_2 = obj.shuffle();
console.log(param_2);
var param_2 = obj.shuffle();
console.log(param_2);
var param_2 = obj.shuffle();
console.log(param_2);
var param_2 = obj.shuffle();
console.log(param_2);
var param_1 = obj.reset();
console.log('reset'+param_1);

var param_2 = obj.shuffle();
console.log(param_2);
var param_2 = obj.shuffle();
console.log(param_2);
var param_2 = obj.shuffle();
console.log(param_2);
var param_2 = obj.shuffle();
console.log(param_2);
var param_1 = obj.reset();
console.log('reset'+param_1);
 


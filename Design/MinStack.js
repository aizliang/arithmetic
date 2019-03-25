/**
 * 最小栈
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/24/design/59/
 */

var MinStack = function() {
    this.diff = new Array;
    this.minNum = undefined;
};

MinStack.prototype.push = function(x) {
    if (this.diff.length == 0) {
        this.diff.push(0);
        this.minNum = x;
    } else {
        this.diff.push(x-this.minNum);
        this.minNum = Math.min(this.minNum, x);
    }
}

MinStack.prototype.pop = function() {
    let diffValue = this.diff.pop();
    if (diffValue < 0) {
        this.minNum -= diffValue;
    }
};

MinStack.prototype.top = function() {
    if (this.diff.length == 0) return undefined;
    let diffValue = this.diff[this.diff.length-1];
    if (diffValue < 0) {
        return this.minNum;
    } else {
        return this.minNum + diffValue;
    }
};

MinStack.prototype.getMin = function() {
    return this.minNum;
};


var obj = new MinStack();
obj.push(-2);
obj.push(1);    
obj.push(9);
obj.push(0);
obj.push(-5);
obj.push(0);
obj.pop();
console.log(obj.top());
console.log(obj.getMin());

obj.pop();
console.log(obj.top());
console.log(obj.getMin());

obj.push(-6);
console.log(obj.top());
console.log(obj.getMin());
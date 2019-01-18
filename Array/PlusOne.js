/**
 * 加一
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/27/
 */

var plusOne = function(digits) {
    var i;
    for(i=digits.length-1;i>=0;i--){
        if(digits[i]==9){
            digits[i]=0;
        }else{
            digits[i]++;
            return digits;
        }
    }

    return [1, ...digits];
};



let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
console.log(plusOne(digits));



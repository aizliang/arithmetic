/**
 * 报数
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/5/strings/39/
 */

var countAndSay = function(n) {
    let value = '1';

    for (var i = 1; i < n; i++) {
    	let curChar = value.charAt(0);
    	let charCount = 0;
    	let newValue = '';

    	for (var j = 0; j < value.length; j++) {
    		if (value.charAt(j) == curChar) {
    			charCount++;
    		} else {
    			newValue = newValue + charCount + curChar;
    			charCount = 1;
    			curChar = value.charAt(j)
    		}

    		if (j == value.length-1) {
    			newValue = newValue + charCount + curChar;
    		}
    	}
    	value = newValue;
    }

    return value;
};

let n=5;
console.log(countAndSay(n));



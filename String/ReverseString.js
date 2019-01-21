/**
 * 反转字符串
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/5/strings/32/
 */



var reverseString = function(s) {
	let reverseS = '';
	for (var i = s.length - 1; i >= 0; i--) {
		reverseS += s.charAt(i);
	}    
	return reverseS;
};

var s="hello";
console.log(reverseString(s));



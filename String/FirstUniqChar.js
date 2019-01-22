/**
 * 字符串中的唯一字符串
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/5/strings/34/
 */

var firstUniqChar = function(s) {
	let charCount = {};
    for (var i = 0; i < s.length; i++) {
    	let curChar = s.charAt(i);
    	if (s.indexOf(curChar, i+1) == -1 && charCount[curChar] == undefined) {
    		return i;
    	} else {
    		charCount[curChar] = charCount[s]++ || 1;
    	}
    }

    return -1;
};

var str = "eello"; 
console.log(firstUniqChar(str));



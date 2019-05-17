/**
 * 验证回文字符串
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/5/strings/36/
 */

var isPalindrome = function(s) {

    s = s.toLowerCase().replace(/[^a-z0-9]+/g, "");
    for (var i = 0; i<s.length/2; i++) {
    	if (s.charAt(i) != s.charAt(s.length-1-i)) {
    		return false;
    	}
    }
    return true;
};

var str = "A man, a plan, a canal: Panamaa"; 
console.log(isPalindrome(str));



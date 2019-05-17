/**
 * 有效的字母异位
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/5/strings/35/
 */

var isAnagram = function(s, t) {
    if (s.length != t.length) return false;

    let sChars = {};
    let tChars = {};
    for (var i = 0; i < s.length; i++) {
    	sChars[s[i]] = sChars[s[i]] + 1 || 1;
    	tChars[t[i]] = tChars[t[i]] + 1 || 1;
    }
 
    if (Object.keys(sChars).length != Object.keys(tChars).length) return false;
    for (let key in sChars) {
    	if (sChars[key] != tChars[key]) {
    		return false;
    	}
    }

    return true;
};

var str1 = "eello"; 
var str2 = "eleloo"; 
console.log(isAnagram(str1, str2));



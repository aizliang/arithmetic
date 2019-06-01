/**
 * 无重复字符串的最长子串
 * source: https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1012/
 */

var lengthOfLongestSubstring = function(s) {
    if (!s || s.length == 0) return 0;

    var longestValue = 0;
    var subString = '';

    for (let index = 0; index < s.length; index++) {
        let char = s[index];
        let subIndex = subString.indexOf(char);

        if (subIndex != -1) {
            subString = subString.slice(subIndex+1);
        } 

        subString = subString.padEnd(subString.length + 1,char);
        longestValue = Math.max(subString.length, longestValue);
    }

    return longestValue;
};


let s = 'pwwkew';
console.log(lengthOfLongestSubstring(s));
/**
 * 字符串转换整数
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/5/strings/37/
 */

var myAtoi = function(str) {
    str = str.trim();
    str = str.match(/^[+-]?[0-9]{1,}/);
    if (str == undefined) {
    	return 0;
    }

    str = parseInt(str[0]);
    if (str > Math.pow(2,31)-1) {
    	return Math.pow(2, 31)-1;
    } else if (str < Math.pow(-2, 31)) {
    	return Math.pow(-2, 31);
    } else {
    	return str;
    }
};

var str = "-3.14"; 
console.log(myAtoi(str));



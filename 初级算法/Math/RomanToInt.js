/**
 * 罗马数字转整数
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/63/
 */

var romanToInt = function (s) {
    if (!s || s.length == 0) return 0;

    var intValue = 0;
    var intMap = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000};

    for (var i=0; i<s.length-1; i++) {
        var curValue = intMap[s[i]]
        var nextValue = intMap[s[i+1]];

        if (curValue < nextValue) {
            intValue -= curValue;
        } else {
            intValue += curValue;
        }
    }

    intValue += intMap[s[s.length-1]];
    return intValue;
}

console.log(romanToInt('III'));



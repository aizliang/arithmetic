/**
 * 有效的括号
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/64/
 */

var isValid = function(s) {
    var leftBrackets = [];
    var mapBracket = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (var i = 0; i < s.length; i++) {
        var unknowBracket = s[i];
        if (unknowBracket == '(' || unknowBracket == '{' || unknowBracket == '[') {
            leftBrackets.push(unknowBracket);
        } else if (unknowBracket != mapBracket[leftBrackets.pop()]) {
            return false;
        } 
    }

    return leftBrackets.length == 0;
}


console.log(isValid('(){}'));



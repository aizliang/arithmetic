/**
 * Fizz Buzz
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/60/
 */

var fizzBuzz = function(n) {
    var stringArray = new Array();

    for (var i = 1; i <= n; i++) {
        if (i%3 == 0 && i%5==0) {
            stringArray.push('FizzBuzz');
        } else if (i%3 == 0) {
            stringArray.push('Fizz');
        } else if (i%5 == 0) {
            stringArray.push('Buzz');
        } else {
            stringArray.push(i.toString());
        }
    }

    return stringArray;
};



console.log(fizzBuzz(15));

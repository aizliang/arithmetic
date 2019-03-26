/**
 * 计算质数
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/25/math/61/
 */

//埃拉托色尼筛网法
var countPrimes = function(n) {
    var primeCount = 0;
    var isPrime = [false];
    for (var i = 1; i < n-1; i++) {
        isPrime.push(true);
    }

    for (var i = 2; i < Math.sqrt(n); i++) {
        if (!isPrime[i-1]) continue;

        for (var j = i*i; j < n; j+=i) {
            isPrime[j-1] = false;
        }
    }

    for (var i = 0; i < n-1; i++) {
        if (isPrime[i]) primeCount++;
    }

    return primeCount;
}


//优化质数判断规则
// var countPrimes = function(n) {
//     var primeCount = 0;
//     for (var i = n-1; i > 1; i--) {
//         if (isPrime(i)) primeCount++;
//     }

//     return primeCount;
// }

// function isPrime(n) {
//     if (n == 2 || n == 3) {
//         return true;
//     }

//     if (n%6 != 5 && n%6 != 1) {
//         return false;
//     }

//     for (var i = 5; i <= Math.sqrt(n); i+=6) {
//         if (n%i == 0 || n%(i+2) == 0) {
//             return false;
//         }
//     }

//     return true;
// }

console.log(countPrimes(10));

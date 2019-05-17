/**
 * 正数反转
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/5/strings/33/
 */

var reverse = function(x) {
    let xStr = x.toString();
    let isMinus = false;
    let re = '';

    if (x < 0) {
    	isMinus = true;
    	xStr = xStr.substring(1);
    }
   
	for (var i = xStr.length - 1; i >= 0; i--) {
		re += xStr.charAt(i);
	}    
	
	isMinus ? re *= -1 : re *= 1;
	if (re < Math.pow(-2, 31) || re > Math.pow(2, 31)-1) {
		return 0;
	}

	return new Number(re);
};

var num = -123; //120 -121 -120 [−2**31,  2**31 − 1]
console.log(reverse(num));



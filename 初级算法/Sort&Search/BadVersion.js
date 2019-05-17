/**
 * 第一个错误版版
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/8/sorting-and-searching/53/
 */

var solution = function(isBadVersion) {
    
    return function(n) {

    	var lowVersion = 0;
    	var highVersion = n;

        while (highVersion - lowVersion > 1) {
        	var middleVersion = Math.floor((highVersion + lowVersion) / 2.0);
        	if (isBadVersion(middleVersion)) {
        		highVersion = middleVersion;
        	} else {
        		lowVersion = middleVersion;
        	}
        }

        return highVersion;
    };
};

function isBadVersion(version) {
	return (version >= 1);
}


console.log(solution(isBadVersion)(2));

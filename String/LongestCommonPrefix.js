/**
 * 最长公共前缀
 * source: https://leetcode-cn.com/explore/featured/card/top-interview-questions-easy/5/strings/40/
 */

var longestCommonPrefix = function(strs) {
	let index=0;
	let commonPrefix = '';
	while(strs.length > 0) {
		let currentChar = strs[0].charAt(index);
		if (currentChar == '') return commonPrefix;

		for (var i = 1; i < strs.length; i++) {
			let nextChar = strs[i].charAt(index);
			if (nextChar == '' || currentChar != nextChar) {
				return commonPrefix;
			} 
		}

		commonPrefix += currentChar;
		index++;
	}

	return commonPrefix;
};

let strs = [''];
console.log(longestCommonPrefix(strs));



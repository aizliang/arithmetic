/**
 * 归并排序
 * 参考资料：https://zh.wikipedia.org/wiki/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F
 */

function mergeSort (nums) {
	if (!nums) return [];
	if (nums.length <= 1) return nums;

	let middleIndex = Math.floor((nums.length)/2.0);
	let leftSortNums = mergeSort(nums.slice(0, middleIndex));
	let rightSortNums = mergeSort(nums.slice(middleIndex, nums.length));

	return merge(leftSortNums, rightSortNums);
}

function merge (leftNums, rightNums) {
	if (!leftNums || !rightNums) return [];

	let mergeArr = [];

	while (leftNums.length > 0 && rightNums.length > 0) {
		if (leftNums[0] <= rightNums[0]) {
			mergeArr.push(leftNums.shift());
		} else {
			mergeArr.push(rightNums.shift());
		}
	}

	return mergeArr.concat(leftNums, rightNums);
}

let nums = [1,2,8,5,6,4];
console.log(mergeSort(nums));
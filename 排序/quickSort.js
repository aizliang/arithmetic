/**
 * 快速排序
 * 参考资料：http://bubkoo.com/2014/01/12/sort-algorithm/quick-sort/
 */

function quickSort (nums) {
	if (!nums || nums.length <= 1) return;
	sort(nums, 0, nums.length-1);
}

function sort (nums, left, right) {
	if (left >= nums.length || right >= nums.length || left >= right) return;

	let index = partition(nums, left, right);
	sort(nums, left, index-1);
	sort(nums, index+1, right);
}

function partition (nums, left, right) {
	if (left >= nums.length || right >= nums.length || left >= right) return;

	let pivot = nums[right];
	let storeIndex = left;

	for (var i = left; i <= right; i++) {
		let currentValue = nums[i];
		if (currentValue <= pivot) {
			if (storeIndex != i) swap(nums, storeIndex, i);
			if (i != right) storeIndex++;;
		}
	}
	return storeIndex;
}

function swap (nums, a, b) {
	if (a >= nums.length || b >= nums.lenght) return;
	let tmp = nums[a];
	nums[a] = nums[b];
	nums[b] = tmp;
}


let nums = [0,1,5,2];
quickSort(nums);
console.log(nums);
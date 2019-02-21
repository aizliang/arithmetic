/**
 * 有序数组转换为平衡二叉搜索树
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/7/trees/51/
 */

//迭代
// var sortedArrayToBST = function(nums) {
//     if (!nums || nums.length == 0) return null;

//     var queue = [nums];
//     var rootNodes = [];
//     var head;

//     while (queue.length > 0) {
//     	let length = queue.length
    
//     	for (var i = 0; i < length; i++) {
//     		let tmpArray = queue.shift();

//     		if (tmpArray.length == 0) { 
//     			if (i%2 == 1) {
//     				rootNodes.shift();
//     			}
//     			continue;
//     		}

//     		let index = Math.floor(tmpArray.length / 2.0);
//     		let value = tmpArray[index];

//     		if (rootNodes.length == 0) {
//     			head = new TreeNode(value);
//     			rootNodes.push(head);
//     		} else {
//     			let node = new TreeNode(value);
//     			rootNodes.push(node);

//     			let preNode = rootNodes[0];
//     			if (i%2 == 0) {
//     				preNode.left = node;
//     			} else {
//     				preNode.right = node;
//     				rootNodes.shift();
//     			}
//     		}

//     		let leftArray = tmpArray.slice(0,index);
//     		let rightArray = tmpArray.slice(index+1, tmpArray.length+1);
//     		queue.push(leftArray);
//     		queue.push(rightArray);
//     	}
//     }

//     return head;
// };


//递归
var sortedArrayToBST = function(nums) {
	if (!nums || nums.length == 0) return null;

	var index = Math.floor(nums.length / 2.0);
	var root = new TreeNode(nums[index]);

	var leftArray = nums.slice(0, index);
	root.left = sortedArrayToBST(leftArray);

	var rightArray = nums.slice(index+1, nums.length+1);
	root.right = sortedArrayToBST(rightArray);

	return root;
}

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var sortArray = [1,2,3];
console.log(sortedArrayToBST(sortArray));

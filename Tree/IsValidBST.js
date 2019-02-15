/**
 * 验证二叉搜索树
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/7/trees/48/
 */

var isValidBST = function(root) {	
	const check = (node, minValue, maxValue) => {
		if (!node) return true;
		if (node.val >= maxValue || node.val <= minValue) return false;

		let isValidLeft = check(node.left, minValue, node.val);
		let isValidRight = check(node.right, node.val, maxValue);
		return isValidLeft && isValidRight;
	}
	return check(root, -Number.MAX_VALUE, Number.MAX_VALUE);
};


function addLeft(treeNode) {
	this.left = treeNode;
}

function addRight(treeNode) {
	this.right = treeNode;
}

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
	this.addLeft = addLeft;
	this.addRight = addRight;
}

var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
var node5 = new TreeNode(5);

node3.addLeft(node1);
node3.addRight(node5);
node5.addLeft(node2);

console.log(isValidBST(node3));

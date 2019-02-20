/**
 * 二叉树的层次遍历
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/7/trees/50/
 */

var levelOrder = function(root) {
	if (!root) return [];

	var values = [];
	var queue = [root];	

	while (queue.length > 0) {
		var currentLevelValues = [];
		var length = queue.length;

		for (var i = 0; i<length; i++) {
			let node = queue.shift();
			currentLevelValues.push(node.val);

			if (node.left) {queue.push(node.left);} 
			if (node.right) {queue.push(node.right);}
		}
		
		values.push(currentLevelValues);
	}

	return values;
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
var node20 = new TreeNode(2);
var node21 = new TreeNode(2);
var node30 = new TreeNode(3);
var node31 = new TreeNode(3);
var node40 = new TreeNode(4);
var node41 = new TreeNode(4);

node1.addLeft(node20);
// node1.addRight(node21);
node20.addLeft(node30);
node30.addLeft(node40);
// node21.addRight(node31);

console.log(levelOrder(node1));

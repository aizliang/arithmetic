/**
 * 二叉树的最大深度
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/7/trees/47/
 */


var maxDepth = function(root) {
    return root ? Math.max(maxDepth(root.left),  maxDepth(root.right)) + 1 : 0;
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

node1.addLeft(node2);
node1.addRight(node3);
node2.addLeft(node4);
node4.addLeft(node5);

console.log(maxDepth(node1));

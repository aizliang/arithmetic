/**
 * 对称二叉树
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/7/trees/49/
 */

var isSymmetric = function(root) {
	if (!root) return true;

	const isMirror = (leftNode, rightNode) => {
		if (!leftNode && !rightNode) return true;
		if (!leftNode || !rightNode) return false;
		return ((leftNode.val == rightNode.val) && isMirror(leftNode.left, rightNode.right) && isMirror(leftNode.right, rightNode.left));
	}
	
    return isMirror(root.left, root.right);
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
node1.addRight(node21);
node20.addLeft(node30);
node21.addLeft(node31);

console.log(isSymmetric(node1));

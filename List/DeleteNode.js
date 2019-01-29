/**
 * 删除节点
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/41/
 */

var deleteNode = function(node) {
	node.val = node.next.val;
	node.next = node.next.next;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
	this.addNode = addNode;
}

function addNode(node) {
	this.next = node;
}

var node0 = new ListNode(0);
var node1 = new ListNode(1);
var node2 = new ListNode(2);
node0.addNode(node1);
node1.addNode(node2);

console.log(node0);
deleteNode(node1)
console.log(node0);
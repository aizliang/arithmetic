/**
 * 合并两个有序列表
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/44/
 */

var mergeTwoLists = function(l1, l2) {
	if (l1 == null) return l2; 
	if (l2 == null) return l1;

    if (l1.val <= l2.val) {
    	l1.next = mergeTwoLists(l1.next, l2);
    	return l1;
    } else {
    	l2.next = mergeTwoLists(l1, l2.next);
    	return l2;
    }
};

function ListNode(val) {
	this.val = val;
	this.next = null;
	this.addNode = addNode;
}

function addNode(node) {
	this.next = node;
}

var node10 = new ListNode(1);
var node11 = new ListNode(2);
var node12 = new ListNode(4);

// node10.addNode(node11);
// node11.addNode(node12);

var node20 = new ListNode(1);
var node21 = new ListNode(3);
var node22 = new ListNode(5);

// node20.addNode(node21);
// node21.addNode(node22);
console.log(mergeTwoLists(node10, node20));

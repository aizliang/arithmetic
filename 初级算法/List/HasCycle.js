/**
 * 环形链表
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/46/
 */

var hasCycle = function(head) {
    if (!head) return false; 

    let f = s = head;
    while(f.next  && f.next.next) {
        s = s.next;
        f = f.next.next;
        if (s === f) return true;
    }

    return false;
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
// node2.addNode(node0);
console.log(hasCycle(null));

/**
 * 删除链表的倒数第n个节点
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/42/
 */

var removeNthFromEnd = function(head, n) {
	if (head == null || n==0) return head;

    let fastNode = head;
    let slowNode = head;
    for (var i = 0; i < n; i++) {
    	fastNode = fastNode.next;
    }

	//删除头节点
  	if (fastNode == null) { 
    	return head.next;
    } 

    while(fastNode.next != null) {
    	fastNode = fastNode.next;
    	slowNode = slowNode.next;
    }
  
	slowNode.next = slowNode.next.next;
	return head;
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
console.log(removeNthFromEnd(node0, 3));

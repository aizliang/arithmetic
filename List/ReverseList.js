/**
 * 反转链表
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/43/
 */

//循环实现
// var reverseList = function(head) {
//     if (head == null) return head;

//     let preNode = null;
//   	let nextNode = head;
//     while(nextNode != null) {
//     	let tmpNode = nextNode.next;

//     	nextNode.next = preNode;
//     	preNode = nextNode;
//     	nextNode = tmpNode;
//     }
//     return preNode;
// };

//递归实现
var reverseList = function(head) {
    if (head == null) return head;

    if (head.next == null) {
    	return head;
    }

    let nextNode = head.next;
    let lastNode = reverseList(nextNode);
    nextNode.next = head;
    head.next = null;
    
    return lastNode;
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
console.log(reverseList(node0));

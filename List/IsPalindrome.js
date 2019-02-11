/**
 * 回文链表
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/45/
 */

//找到中间节点，然后原地反转链表
var isPalindrome = function(head) {
    if (head == null) return true;

    let f = s = head;
    while(f && f.next && f.next.next) {
        s = s.next;
        f = f.next.next
    }
    let middleNode = s.next;

    let reverseHead = reverseList(middleNode);
    while (reverseHead != null) {
        if (reverseHead.val != head.val) return false;
        reverseHead = reverseHead.next;
        head = head.next;
    }
    return true;
}; 

var reverseList = function(head) {
    if (head == null) return head;

    let preNode = null;
    let nextNode = head;
    while(nextNode != null) {
        let tmpNode = nextNode.next;

        nextNode.next = preNode;
        preNode = nextNode;
        nextNode = tmpNode;
    }
    return preNode;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
	this.addNode = addNode;
}

function addNode(node) {
	this.next = node;
}

var node0 = new ListNode(1);
var node1 = new ListNode(2);
var node2 = new ListNode(2);
var node3 = new ListNode(1);

node0.addNode(node1);
node1.addNode(node2);
node2.addNode(node3);

console.log(isPalindrome(node0));

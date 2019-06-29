/**
 * 合并两个有序链表
 * source: https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1048/
 */

import Foundation

public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init(_ val: Int) {
        self.val = val
        self.next = nil
    }
}


class Solution {
    func mergeTwoLists(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        guard l1 != nil || l2 != nil else {
            return nil
        }
        guard l1 != nil else {
            return l2
        }
        guard l2 != nil else {
            return l1
        }
        
        var l1Node = l1
        var l2Node = l2
        
        let dummyNode = ListNode.init(0)
        var currentNode = dummyNode
        
        while l1Node != nil && l2Node != nil  {
            if (l1Node!.val <= l2Node!.val) {
                currentNode.next = l1Node
                l1Node = l1Node!.next
            } else {
                currentNode.next = l2Node
                l2Node = l2Node!.next
            }
            
            currentNode = currentNode.next!
        }
        
        if l1Node != nil {
            currentNode.next = l1Node
        } else if l2Node != nil {
            currentNode.next = l2Node
        }
        
        return dummyNode.next
    }
}

let list1 = ListNode.init(1)
let list2 = ListNode.init(2)
let list3 = ListNode.init(4)

list1.next = list2
list2.next = list3


let list4 = ListNode.init(1)
let list5 = ListNode.init(2)
let list6 = ListNode.init(4)

list4.next = list5
list5.next = list6

var listNode = Solution().mergeTwoLists(list1, list4)

while listNode != nil {
    print(listNode!.val)
    listNode = listNode!.next
}

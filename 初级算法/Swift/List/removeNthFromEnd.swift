/**
 * 删除链表的倒数第N个节点
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/6/linked-list/42/
 */

import Foundation

class Solution {
    func removeNthFromEnd(_ head: ListNode?, _ n: Int) -> ListNode? {
        
        let dummyNode = ListNode.init(0)
        dummyNode.next = head
        
        var slowNode: ListNode? = dummyNode
        var fastNode = head
        
        for _ in 0..<n {
            fastNode = fastNode?.next
        }
        
        while fastNode != nil {
            fastNode = fastNode?.next
            slowNode = slowNode?.next
        }
        
        slowNode?.next = slowNode?.next?.next
        
        return dummyNode.next
    }
}

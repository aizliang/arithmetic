/**
 * 二叉树的最大深度
 * source: https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/7/trees/47/
 */

import Foundation

public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init(_ val: Int) {
        self.val = val
        self.left = nil
        self.right = nil
    }
}

class Solution {
    func maxDepth(_ root: TreeNode?) -> Int {
        guard root != nil  else {
            return 0
        }
        
        let leftDepth = maxDepth(root?.left) + 1
        let rightDepth = maxDepth(root?.right) + 1
        return max(leftDepth, rightDepth)
    }
}

let node1 = TreeNode.init(3)
let node2 = TreeNode.init(9)
let node3 = TreeNode.init(20)
let node4 = TreeNode.init(15)
let node5 = TreeNode.init(7)

node1.left = node2
node1.right = node3
node3.left = node4
node3.right = node5

print(Solution().maxDepth(node1))

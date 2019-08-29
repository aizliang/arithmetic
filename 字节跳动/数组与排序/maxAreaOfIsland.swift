/**
 * 岛屿的最大面积
 * source: https://leetcode-cn.com/explore/interview/card/bytedance/243/array-and-sorting/1034/
 */

import Foundation

class Solution {
    func maxAreaOfIsland(_ grid: [[Int]]) -> Int {
        guard grid.count > 0 else {
            return 0
        }
        var tempGrid = grid
        var maxArea = 0
        
        func getCurrentIslandArea(positionX: Int, positionY: Int) -> Int {
            guard positionX >= 0 && positionY >= 0 && positionX < tempGrid.count && positionY < tempGrid[positionX].count else {
                return 0
            }
            
            if tempGrid[positionX][positionY] == 0 {
                return 0
            }
            
            var area = 1
            tempGrid[positionX][positionY] = 0
            area += getCurrentIslandArea(positionX: positionX-1, positionY: positionY)
            area += getCurrentIslandArea(positionX: positionX, positionY: positionY-1)
            area += getCurrentIslandArea(positionX: positionX+1, positionY: positionY)
            area += getCurrentIslandArea(positionX: positionX, positionY: positionY+1)
            return area
        }
        
        for i in 0..<tempGrid.count {
            let gridY = tempGrid[i]
            for j in 0..<gridY.count {
                if gridY[j] == 1 {
                    maxArea = max(maxArea, getCurrentIslandArea(positionX: i, positionY: j))
                }
            }
        }
        
        return maxArea
    }
}

let array = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
             [0,0,0,0,0,0,0,1,1,1,0,0,0],
             [0,1,1,0,1,0,0,0,0,0,0,0,0],
             [0,1,0,0,1,1,0,0,1,0,1,0,0],
             [0,1,0,0,1,1,0,0,1,1,1,0,0],
             [0,0,0,0,0,0,0,0,0,0,1,0,0],
             [0,0,0,0,0,0,0,1,1,1,0,0,0],
             [0,0,0,0,0,0,0,1,1,0,0,0,0]]

print(Solution().maxAreaOfIsland(array))

from typing import List


class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        sortedHeights = sorted(heights)

        return len(list(filter(lambda height: height[0] != height[1], zip(heights, sortedHeights))))


print(Solution().heightChecker([1, 1, 4, 2, 1, 3]))
print(Solution().heightChecker([5, 1, 2, 3, 4]))
print(Solution().heightChecker([1, 2, 3, 4, 5]))

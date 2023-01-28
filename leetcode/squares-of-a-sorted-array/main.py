from typing import List


class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        return sorted([num ** 2 for num in nums])


print(Solution().sortedSquares([-4, -1, 0, 3, 10]))
print(Solution().sortedSquares([-7, -3, 2, 3, 11]))

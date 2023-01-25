from typing import List


class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        return len([n for n in nums if len(str(n)) % 2 == 0])


print(Solution().findNumbers([12, 345, 2, 6, 7896]))
print(Solution().findNumbers([555, 901, 482, 1771]))

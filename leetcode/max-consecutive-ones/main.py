from typing import List


class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        count = max_count = 0

        for n in nums:
            if n == 1:
                count += 1
                continue

            max_count = max(count, max_count)
            count = 0

        return max(count, max_count)


print(Solution().findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
print(Solution().findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))

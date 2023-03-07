from typing import List


class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        unique_nums = list(set(nums))

        if len(unique_nums) < 3:
            return max(unique_nums)

        return sorted(unique_nums, reverse=True)[2]


print(Solution().thirdMax([3, 2, 1]))
print(Solution().thirdMax([1, 2]))
print(Solution().thirdMax([2, 2, 3, 1]))

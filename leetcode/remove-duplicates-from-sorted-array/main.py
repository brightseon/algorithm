from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        for i in range(len(nums) - 1, 0, -1):
            if nums[i - 1] != nums[i]:
                continue

            nums.pop(i)


print(Solution().removeDuplicates([1, 1, 2]))
print(Solution().removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

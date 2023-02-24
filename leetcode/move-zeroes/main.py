from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:

        for i in range(len(nums) - 1, -1, -1):
            if nums[i] != 0:
                continue

            temp = nums[i]
            nums.pop(i)
            nums.append(temp)


print(Solution().moveZeroes([0, 1, 0, 3, 12]))
print(Solution().moveZeroes([0]))

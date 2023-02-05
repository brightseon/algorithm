from typing import List


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        for i in range(len(nums)-1, -1, -1):
            if nums[i] != val:
                continue

            nums.pop(i)
        print(nums)


print(Solution().removeElement([3, 2, 2, 3], 3))
print(Solution().removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))

from typing import List


class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        last_even = 0

        for i in range(len(nums)):
            if nums[i] % 2 != 0:
                continue

            temp = nums[last_even]
            nums[last_even] = nums[i]
            nums[i] = temp
            last_even += 1

        return nums


print(Solution().sortArrayByParity([3, 1, 2, 4]))
print(Solution().sortArrayByParity([0]))

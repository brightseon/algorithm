from typing import List


class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        results = list(range(1, len(nums) + 1))

        for num in nums:
            results[num - 1] = 0

        return list(filter(lambda num: num != 0, results))


print(Solution().findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
print(Solution().findDisappearedNumbers([1, 1]))

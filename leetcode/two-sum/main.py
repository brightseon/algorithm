from itertools import combinations


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for a, b in combinations(nums, 2):
            if a + b != target:
                continue

            return [nums.index(a), nums.index(b, nums.index(a) + 1)]


print(Solution().twoSum([2, 7, 11, 15], 9))
print(Solution().twoSum([3, 2, 4], 6))
print(Solution().twoSum([3, 3], 6))

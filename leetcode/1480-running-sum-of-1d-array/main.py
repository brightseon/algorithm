class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        return [sum(nums[0:a+1]) for a in range(len(nums))]

print(Solution().runningSum([1, 2, 3, 4]))
print(Solution().runningSum([1, 1, 1, 1, 1]))
print(Solution().runningSum([3, 1, 2, 10, 1]))
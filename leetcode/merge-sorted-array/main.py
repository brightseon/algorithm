from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        nums1[m:] = nums2[0:n]
        nums1.sort()


print(Solution().merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
print(Solution().merge([1], 1, [], 0))
print(Solution().merge([0], 0, [1], 1))

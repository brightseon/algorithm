from typing import List


class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        if len(arr) < 3:
            return False

        max_idx = arr.index(max(arr))

        if max_idx == 0 or max_idx == len(arr) - 1:
            return False

        for a in range(1, len(arr[:max_idx + 1])):
            if arr[a - 1] < arr[a]:
                continue

            return False

        for a in range(max_idx, len(arr) - 1):
            if arr[a] > arr[a + 1]:
                continue

            return False

        return True


print(Solution().validMountainArray([2, 1]))
print(Solution().validMountainArray([3, 5, 5]))
print(Solution().validMountainArray([0, 3, 2, 1]))

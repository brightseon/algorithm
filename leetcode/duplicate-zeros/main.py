from typing import List


class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        for i in range(len(arr) - 1, -1, -1):
            if arr[i] != 0:
                continue

            arr.insert(i + 1, 0)
            arr.pop()


print(Solution().duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
print(Solution().duplicateZeros([1, 2, 3]))

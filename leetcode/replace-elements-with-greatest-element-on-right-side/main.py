from typing import List


class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        max_num = arr[-1]
        size = len(arr)

        for i in range(size - 2, -1, -1):
            temp = max_num

            if arr[i] > max_num:
                max_num = arr[i]

            arr[i] = temp

        return arr[:size - 1] + [-1]


print(Solution().replaceElements([17, 18, 5, 4, 6, 1]))
print(Solution().replaceElements([400]))

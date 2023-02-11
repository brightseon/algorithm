from typing import List


class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        for i in range(len(arr)):
            try:
                idx = arr.index(arr[i] * 2)
                if idx == i:
                    raise Exception(None)

                return True
            except:
                continue

        return False


print(Solution().checkIfExist([10, 2, 5, 3]))
print(Solution().checkIfExist([3, 1, 7, 11]))

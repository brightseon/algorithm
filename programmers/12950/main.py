def solution(arr1, arr2):
    return [[arr2[idx][i] + v for i, v in enumerate(value)] for idx, value in enumerate(arr1)]


print(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]))
print(solution([[1], [2]], [[3], [4]]))

def solution(arr):
    if len(arr) < 2:
        return [-1]
    idx = arr.index(min(arr))

    return arr[:idx] + arr[idx + 1:]


print(solution([4, 3, 2, 1]))
print(solution([10]))
print(solution([2, 5, 1, 3, 6]))

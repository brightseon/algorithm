def solution(arr, divisor):
    sort_arr = sorted(arr)

    if divisor == 1:
        return sort_arr

    arr = []

    if sort_arr[-1] > divisor:
        arr = list(filter(lambda a: a % divisor == 0, sort_arr))

    return [-1] if len(arr) == 0 else arr

# def solution(arr, divisor):
#     results = list(filter(lambda a: a % divisor == 0, sorted(arr)))
#     return [-1] if len(results) == 0 else results


print(solution([5, 9, 7, 10], 5))
print(solution([2, 36, 1, 3], 1))
print(solution([3, 2, 6], 10))
print(solution([2, 4, 7], 3))

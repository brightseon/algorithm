def solution(nums):
    count = len(nums) / 2
    types_count = len(set(nums))

    return count if types_count > count else types_count


print(solution([3, 1, 2, 3]))
print(solution([3, 3, 3, 2, 2, 4]))
print(solution([3, 3, 3, 2, 2, 2]))

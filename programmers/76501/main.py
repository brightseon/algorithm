def solution(absolutes, signs):
    return sum([(absolutes[i] * (1 if var else -1)) for i, var in enumerate(signs)])


print(solution([4, 7, 12], [True, False, True]))
print(solution([1, 2, 3], [False, False, True]))

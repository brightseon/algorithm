from math import floor, sqrt


def solution(n):
    sum = 0
    for num in range(1, floor(sqrt(n)) + 1):
        if n % num != 0:
            continue

        sum += num
        if num != (n / num):
            sum += n / num

    return sum


print(solution(12))
print(solution(5))

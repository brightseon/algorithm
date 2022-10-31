def solution(price, money, count):
    return max(0, sum([(a + 1) * price for a in range(count)]) - money)


print(solution(3, 20, 4))

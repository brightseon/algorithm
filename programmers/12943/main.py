def solution(num):
    number = num
    count = 0

    while count < 500:
        if number == 1:
            return count

        if number % 2 == 0:
            number = number / 2
        else:
            number = number * 3 + 1

        count += 1

    return -1


print(solution(6))
print(solution(16))
print(solution(626331))
print(solution(1))

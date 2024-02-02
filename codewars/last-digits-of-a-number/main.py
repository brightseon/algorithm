def solution(n, d):
  return [int(n) for n in str(n)[max(0, len(str(n)) - d):]]


print(solution(1, 1))
print(solution(123767, 4))
print(solution(0, 1))
print(solution(34625647867585, 10))

print(solution(1234, 0))
print(solution(24134, -4))

print(solution(1343, 5))

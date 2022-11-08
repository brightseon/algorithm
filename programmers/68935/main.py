def solution(n):
  res = ''

  while n:
    res += str(n % 3)
    n = n // 3

  return int(res, 3)


print(solution(45))
print(solution(125))

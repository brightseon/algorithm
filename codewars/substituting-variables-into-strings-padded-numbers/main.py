def solution(value):
  return f'Value is {str(value).rjust(5, "0")}'


print(solution(0))
print(solution(5))
print(solution(109))
print(solution(1204))

def solution(d, budget):
  total = sum(d)
  if total <= budget: return len(d)
  if total - budget in d: return len(d) - 1

  return solution(sorted(d)[0:-1], budget)

print(solution([1, 3, 2, 5, 4], 9))
print(solution([2, 2, 3, 3], 10))
def grader(score):
  if score > 1 or score < 0.6:
    return 'F'
  elif score >= 0.9:
    return 'A'
  elif score >= 0.8:
    return 'B'
  elif score >= 0.7:
    return 'C'

  return 'D'


print(grader(0.7))
print(grader(0.9))
print(grader(0.6))

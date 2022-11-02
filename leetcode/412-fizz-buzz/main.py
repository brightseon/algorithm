def verification(num):
  if num % (3 * 5) == 0: return 'FizzBuzz'
  if num % 3 == 0: return 'Fizz'
  if num % 5 == 0: return 'Buzz'

  return f'{num}'

class Solution:

  def fizzBuzz(self, n: int):
    return [verification(a) for a in range(1, n + 1)]

print(Solution().fizzBuzz(3));
print(Solution().fizzBuzz(5));
print(Solution().fizzBuzz(15));
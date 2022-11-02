class Solution:

  def numberOfSteps(self, num: int) -> int:
    i = 0
    n = num
    
    while n > 0:
      n = n / 2 if n % 2 == 0 else n - 1
      i += 1
      
    return i

def even_or_odd(s):
  nums = list(map(lambda x: int(x), s))
  even = sum(filter(lambda x: x % 2 == 0, nums))
  odd = sum(filter(lambda x: x % 2 != 0, nums))

  if even > odd:
    return 'Even is greater than Odd'

  if odd > even:
    return 'Odd is greater than Even'

  return 'Even and Odd are the same'


print(even_or_odd('12'))
print(even_or_odd('123'))
print(even_or_odd('112'))

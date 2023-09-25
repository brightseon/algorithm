def number_joy(n):
  total = sum([int(s) for s in str(n)])
  reverse_total = int(''.join(list(reversed(str(total)))))

  if total * reverse_total == n:
    return True
    
  return False


print(number_joy(1997))
print(number_joy(1998))
print(number_joy(1729))
print(number_joy(18))

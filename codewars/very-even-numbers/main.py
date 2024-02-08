def is_very_even_number(n):
  total = sum([int(n) for n in str(n)])

  if len(str(total)) > 1:
    return is_very_even_number(total)

  return total % 2 == 0


print(is_very_even_number(0))
print(is_very_even_number(4))
print(is_very_even_number(12))
print(is_very_even_number(222))
print(is_very_even_number(5))
print(is_very_even_number(45))
print(is_very_even_number(4554))
print(is_very_even_number(1234))
print(is_very_even_number(88))
print(is_very_even_number(24))
print(is_very_even_number(400000220))

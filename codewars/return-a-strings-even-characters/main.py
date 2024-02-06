def even_chars(st):
  if len(st) < 2 or len(st) > 100:
    return 'invalid string'

  return [s for i, s in enumerate(st) if (i + 1) % 2 == 0]


print(even_chars("a"))
print(even_chars("abcdefghijklm"))
print(even_chars("aBc_e9g*i-k$m"))

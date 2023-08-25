def switcheroo(s):
  output = ''

  for char in s:
    c = char

    if char == 'a':
      c = 'b'
    elif char == 'b':
      c = 'a'

    output = output + c

  return output


print(switcheroo("abc"))
print(switcheroo('aaabcccbaaa'))
print(switcheroo('ccccc'))
print(switcheroo('abababababababab'))
print(switcheroo('aaaaa'))

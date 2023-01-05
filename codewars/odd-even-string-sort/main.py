def sort_my_string(s):
  result = ['', '']

  for i, a in enumerate(s):
    if i % 2 == 0:
      result[0] = result[0] + a
    else:
      result[1] = result[1] + a

  return ' '.join(result)

print(sort_my_string("CodeWars"))
print(sort_my_string("YCOLUE'VREER"))
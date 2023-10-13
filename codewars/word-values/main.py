def name_value(my_list):
  return [
    sum(map(lambda x: ord(x) - 96, str(l.replace(' ', '')))) * (i + 1)
    for i, l in enumerate(my_list)
  ]


print(name_value(["codewars", "abc", "xyz"]))
print(name_value(["abc abc", "abc abc", "abc", "abc"]))

def uni_total(s):
  return sum([ord(char) for char in list(s)])


print(uni_total("a"))
print(uni_total("b"))
print(uni_total("c"))
print(uni_total(""))
print(uni_total("aaa"))
print(uni_total("abc"))
print(uni_total("Mary Had A Little Lamb"))
print(uni_total("Mary had a little lamb"))
print(uni_total("CodeWars rocks"))
print(uni_total("And so does Strive"))

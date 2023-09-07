def string_merge(string1, string2, letter):
  return string1[0:string1.index(letter)] + string2[string2.index(letter):]


print(string_merge("hello", "world", "l"))
print(string_merge("coding", "anywhere", "n"))
print(string_merge("jason", "samson", "s"))
print(string_merge("wonderful", "people", "e"))

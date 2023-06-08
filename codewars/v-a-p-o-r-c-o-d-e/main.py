def vaporcode(s):
  return '  '.join(list(s.replace(' ', '').upper()))


print(vaporcode("Lets go to the movies"))
print(vaporcode("Why isn't my code working?"))

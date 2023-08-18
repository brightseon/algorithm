import re


def valid_spacing(s):
  result = re.search('^(?!\s*$)(?!\s)\w+(\s{0,1}\w+)*(?<!\s)$|^$', s)

  if result == None:
    return False

  return True


print(valid_spacing('Hello world'))
print(valid_spacing(' Hello world'))
print(valid_spacing('Hello  world '))
print(valid_spacing('Hello'))
print(valid_spacing('Helloworld'))
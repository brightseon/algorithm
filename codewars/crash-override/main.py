import re


def alias_gen(f_name, l_name):
  if re.match('^[A-Z]', f_name, re.I) == None or re.match(
      '^[A-Z]', l_name, re.I) == None:
    return 'Your name must start with a letter from A - Z.'

  return f'{FIRST_NAME[f_name[0].upper()]} {SURNAME[l_name[0].upper()]}'


print(alias_gen('Mike', 'Millington'))
print(alias_gen('Fahima', 'Tash'))
print(alias_gen('Daisy', 'Petrovic'))
print(alias_gen('Barny', 'White'))
print(alias_gen('Hank', 'Kutz'))
print(alias_gen('123abc', 'Pinkman'))
print(alias_gen('walter', 'white'))

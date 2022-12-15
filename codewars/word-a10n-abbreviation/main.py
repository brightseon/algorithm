import re


def a10n(match):
  s = match.group()
  if len(s) < 4: return s

  return f'{s[0]}{len(s) - 2}{s[-1]}'


def abbreviate(s):
  return re.sub('([a-z]+|\d|[^\w])', a10n, s, flags=re.IGNORECASE)


print(abbreviate("internationalization"))
print(abbreviate("accessibility"))
print(abbreviate("Accessibility"))
print(abbreviate("elephant-ride"))
print(
  abbreviate('You need, need not want, to complete this code-wars mission'))
print(abbreviate('a5sits: cat; the, balloon. sat_cat on: on5'))
print(abbreviate('on_a; is_is: balloon-the_cat5balloon cat-'))

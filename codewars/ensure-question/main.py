import re


def ensure_question(s):
  return s if re.search('\?$', s) else f'{s}?'


print(ensure_question(""))
print(ensure_question("Yes"))
print(ensure_question("No?"))
print(ensure_question("Well????"))
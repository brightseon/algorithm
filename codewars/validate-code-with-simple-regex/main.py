from re import match


def validate_code(code):
  return match('^(1|2|3)\d', str(code)) != None


print(validate_code(123))
print(validate_code(248))
print(validate_code(8))
print(validate_code(321))
print(validate_code(9453))

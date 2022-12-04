def double_char(s):
    return ''.join([str + str for str in list(s)])


print(double_char('string'))
print(double_char('Hello World'))
print(double_char('1234!_'))

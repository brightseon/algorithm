def triple_x(s):
    idx = s.find('x')

    if idx < 0:
        return False

    return s[idx+1:idx+3] == 'xx'


print(triple_x(""))
print(triple_x("there's no XXX here"))
print(triple_x("abraxxxas"))
print(triple_x("xoxotrololololololoxxx"))
print(triple_x("soft kitty, warm kitty, xxxxx"))
print(triple_x("softx kitty, warm kitty, xxxxx"))

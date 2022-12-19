import re

def remove(s):
    return re.sub('!', '', s) + '!'

print(remove("Hi!"))
print(remove("Hi!!!"))
print(remove("!Hi"))
print(remove("!Hi!"))
print(remove("Hi! Hi!"))
print(remove("Hi"))
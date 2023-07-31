def replace(str):
    return str.replace('!', '2').replace('?', '3')


def add(texts):
    return sum([int(t) for t in texts])


def balance(left, right):
    l = add(replace(left))
    r = add(replace(right))

    if l > r:
        return 'Left'

    if l < r:
        return 'Right'

    return 'Balance'


print(balance("", ""))
print(balance("!!", "??"))
print(balance("!??", "?!!"))
print(balance("!?!!", "?!?"))
print(balance("!!???!????", "??!!?!!!!!!!"))

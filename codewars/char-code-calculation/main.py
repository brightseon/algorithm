def calc(x):
    total1 = ''.join([f'{ord(x)}' for x in list(x)])
    total2 = total1.replace('7', '1')

    return sum([int(total) for total in total1]) - sum([int(total) for total in total2])


print(calc('abcdef'))
print(calc('ifkhchlhfd'))
print(calc('aaaaaddddr'))
print(calc('jfmgklf8hglbe'))
print(calc('jaam'))

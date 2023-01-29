def div_con(x):
    return sum([-int(num) if type(num) == str else num for num in x])


print(div_con([9, 3, '7', '3']))
print(div_con(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
print(div_con(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']))
print(div_con(['1', '5', '8', 8, 9, 9, 2, '3']))
print(div_con([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]))

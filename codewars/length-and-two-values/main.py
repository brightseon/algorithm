def alternate(n, first_value, second_value):
    return [first_value if i % 2 == 0 else second_value for i in range(n)]


print(alternate(5, True, False))
print(alternate(20, "blue", "red"))
print(alternate(0, "lemons", "apples"))

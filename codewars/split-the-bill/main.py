def split_the_bill(x):
    avg = sum(x.values()) / len(x.keys())

    for k in x:
        x[k] = round(x[k] - avg, 2)

    return x


print(split_the_bill({'A': 20, 'B': 15, 'C': 10}))
print(split_the_bill({'A': 40, 'B': 25, 'X': 10}))
print(split_the_bill({'A': 40, 'B': 25, 'C': 10, 'D': 153, 'E': 58}))
print(split_the_bill({'A': 475, 'B': 384, 'C': 223, 'D': 111, 'E': 19}))
print(split_the_bill({'A': 20348, 'B': 493045, 'C': 2948,
      'D': 139847, 'E': 48937534, 'F': 1938724, 'G': 4, 'H': 2084}))

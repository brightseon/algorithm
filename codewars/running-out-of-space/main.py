def spacey(array):
    return [array[0]] + [''.join(array[:i+1]) + a for i, a in enumerate(array[1:])]


print(spacey(['kevin', 'has', 'no', 'space']))
print(spacey(['this', 'cheese', 'has', 'no', 'holes']))

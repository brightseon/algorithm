def arr_check(arr):
    return all([isinstance(a, list) for a in arr])


print(arr_check([]))
print(arr_check([['string']]))
print(arr_check([[], {}]))
print(arr_check([[1], [2], [3]]))
print(arr_check(["A", "R", "R", "A", "Y"]))

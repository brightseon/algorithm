def consecutive(arr):
    if len(arr) == 0:
        return 0

    return len(range(min(arr), max(arr) + 1)) - len(arr)


print(consecutive([4, 8, 6]))
print(consecutive([1, 2, 3, 4]))
print(consecutive([]))
print(consecutive([1]))
print(consecutive([-10]))
print(consecutive([1, -1]))
print(consecutive([-10, -9]))
print(consecutive([0]))
print(consecutive([10, -10]))
print(consecutive([-10, 10]))

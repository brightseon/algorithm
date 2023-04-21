def nth_smallest(arr, pos):
    return sorted(arr)[pos - 1]


print(nth_smallest([3, 1, 2], 2))
print(nth_smallest([15, 20, 7, 10, 4, 3], 3))
print(nth_smallest([-5, -1, -6, -18], 4))
print(nth_smallest([-102, -16, -1, -2, -367, -9], 5))
print(nth_smallest([2, 169, 13, -5, 0, -1], 4))

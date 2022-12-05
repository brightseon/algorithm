def flatten_and_sort(array):
    return sorted(sum(array, []))


print(flatten_and_sort([]))
print(flatten_and_sort([[], []]))
print(flatten_and_sort([[], [1]]))
print(flatten_and_sort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))
print(flatten_and_sort(
    [[1, 3, 5], [100], [2, 4, 6]]))

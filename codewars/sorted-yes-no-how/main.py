def is_sorted_and_how(arr):
    if all([a >= arr[i] for i, a in enumerate(arr[1:])]):
        return 'yes, ascending'

    if all([arr[i] >= a for i, a in enumerate(arr[1:])]):
        return 'yes, descending'

    return 'no'


print(is_sorted_and_how([1, 2]))
print(is_sorted_and_how([15, 7, 3, -8]))
print(is_sorted_and_how([4, 2, 30]))

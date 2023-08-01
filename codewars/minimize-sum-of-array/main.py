def min_sum(arr):
    sort_arr = sorted(arr)

    return sum([sort_arr[i] * sort_arr[-1 * (i + 1)] for i in range(0, int(len(arr) / 2))])


print(min_sum([5, 4, 2, 3]))
print(min_sum([12, 6, 10, 26, 3, 24]))
print(min_sum([9, 2, 8, 7, 5, 4, 0, 6]))

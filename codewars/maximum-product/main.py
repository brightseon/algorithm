def adjacent_element_product(array):
    return max([a * array[i + 1] for i, a in enumerate(array[0:-1])])


print(adjacent_element_product([5, 8]))
print(adjacent_element_product([1, 2, 3]))
print(adjacent_element_product([1, 5, 10, 9]))
print(adjacent_element_product([4, 12, 3, 1, 5]))
print(adjacent_element_product([5, 1, 2, 3, 1, 4]))

print(adjacent_element_product([3, 6, -2, -5, 7, 3]))
print(adjacent_element_product([9, 5, 10, 2, 24, -1, -48]))
print(adjacent_element_product([5, 6, -4, 2, 3, 2, -23]))
print(adjacent_element_product(
    [-23, 4, -5, 99, -27, 329, -2, 7, -921]))
print(adjacent_element_product([5, 1, 2, 3, 1, 4]))

print(adjacent_element_product([1, 0, 1, 0, 1000]))
print(adjacent_element_product([1, 2, 3, 0]))

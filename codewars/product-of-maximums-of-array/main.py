from functools import reduce


def max_product(lst, n_largest_elements):
  return reduce(lambda x, y: x * y,
                sorted(lst, reverse=True)[0:n_largest_elements], 1)


print(max_product([8, 10, 9, 7], 3))
print(max_product([10, 8, 3, 2, 1, 4, 10], 5))
print(max_product([-4, -27, -15, -6, -1], 2))
print(max_product([10, 3, -1, -27], 3))

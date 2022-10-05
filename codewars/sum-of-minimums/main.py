from functools import reduce

def sum_of_minimums(numbers):
    return reduce(lambda a, b: a + b, map(lambda nums: min(nums), numbers), 0)

print(sum_of_minimums([ [ 7,9,8,6,2 ], [6,3,5,4,3], [5,8,7,4,5] ]))
print(sum_of_minimums([ [11,12,14,54], [67,89,90,56], [7,9,4,3], [9,8,6,7] ]))
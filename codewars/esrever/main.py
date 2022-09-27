from functools import reduce

def reverse(lst):
    empty_list = list()
    return reduce(lambda acc, cur: list([cur]) + acc, lst, empty_list)

print(reverse(list([1, 2, 3])))
print(reverse(list(1, None, 14, 'two')))
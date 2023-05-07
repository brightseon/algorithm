def number_of_occurrences(element, sample):
    return len(list(filter(lambda s: s == element, sample)))


print(number_of_occurrences(4, [0, 1, 2, 2, 3]))
print(number_of_occurrences(6, [0, 1, 2, 2, 3]))
print(number_of_occurrences(-1, [0, 1, 2, 2, 3]))
print(number_of_occurrences(0, [0, 1, 2, 2, 3]))
print(number_of_occurrences(2, [0, 1, 2, 2, 3]))
print(number_of_occurrences(3, [0, 1, 2, 2, 3]))

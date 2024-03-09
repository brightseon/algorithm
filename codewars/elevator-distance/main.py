def elevator_distance(array):
    return sum([abs(a - b) for a, b in zip(array, array[1:])])


print(elevator_distance([5, 2, 8]))
print(elevator_distance([1, 2, 3]))
print(elevator_distance([7, 1, 7, 1]))

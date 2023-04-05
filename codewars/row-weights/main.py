def row_weights(array):
    weights = [0, 0]

    for i, a in enumerate(array):
        idx = 1 if (i + 1) % 2 == 0 else 0
        weights[idx] = weights[idx] + a

    return tuple(weights)


print(row_weights([80]))
print(row_weights([100, 50]))
print(row_weights([50, 60, 70, 80]))
print(row_weights([13, 27, 49]))
print(row_weights([70, 58, 75, 34, 91]))
print(row_weights([29, 83, 67, 53, 19, 28, 96]))
print(row_weights([0]))
print(row_weights([100, 51, 50, 100]))
print(row_weights([39, 84, 74, 18, 59, 72, 35, 61]))
print(row_weights([0, 1, 0]))

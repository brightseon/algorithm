def data_reverse(data):
    return sum(list(reversed([data[(i * 8):((i + 1) * 8)] for i in range(0, int(len(data) / 8))])), [])


print(data_reverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]))
print(data_reverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]))

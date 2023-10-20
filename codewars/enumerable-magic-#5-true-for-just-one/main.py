def one(sq, fun):
    return len(list(filter(fun, sq))) == 1


print(one((6, 7, 8, 9, 10, 11), lambda x: x == 9))
print(one((6, 7, 8, 9, 10, 11), lambda x: x < 9))
print(one((6, 7, 8, 9, 10, 11), lambda x: x > 9))

def head(arr):
    return arr[0]


def tail(arr):
    return arr[1:]


def init(arr):
    return arr[0:-1]


def last(arr):
    return arr[-1]


print(head([5, 1]))
print(tail([1]))
print(init([1, 5, 7, 9]))
print(last([7, 2]))

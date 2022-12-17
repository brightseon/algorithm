def Xbonacci(signature, n):
    if len(signature) >= n:
        return signature[0:n]

    arr = signature + [sum(signature)]

    for i in range(n - len(arr)):
        arr.append(sum(arr[len(arr) - len(signature):]))

    return arr


print(Xbonacci([0, 1], 10))
print(Xbonacci([1, 1], 10))
print(Xbonacci([0, 0, 0, 0, 1], 10))
print(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10))
print(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20))

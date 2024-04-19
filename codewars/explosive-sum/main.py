def exp_sum(n):
    array = [0] * (n+1)
    array[0] = 1

    for i in range(1, n+1):
        for j in range(i, n+1):
            array[j] += array[j-i]

    return array[n]


print(exp_sum(1))
print(exp_sum(2))
print(exp_sum(3))

print(exp_sum(4))
print(exp_sum(5))
print(exp_sum(10))

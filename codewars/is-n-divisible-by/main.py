def is_divisible(n, *nums):
    return all([n % num == 0 for num in nums])


print(is_divisible(3, 3, 4))
print(is_divisible(12, 3, 4))
print(is_divisible(8, 3, 4, 2, 5))
print(is_divisible(48, 3, 4, 2))
print(is_divisible(100, 5, 10, 20, 25))
print(is_divisible(100, 5))
print(is_divisible(4, 4, 2, 4, 4, 4, 4, 4, 4))
print(is_divisible(5, 2))
print(is_divisible(17, 17, 17, 17))
print(is_divisible(17, 1))

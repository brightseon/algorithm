from math import sqrt, ceil


def is_prime(num):
    if num == 2:
        return True
    if num <= 1 or num % 2 == 0:
        return False

    for i in range(3, ceil(sqrt(num)) + 1):
        if num % i == 0:
            return False

    return True


print(is_prime(0))
print(is_prime(1))
print(is_prime(2))
print(is_prime(73))
print(is_prime(75))
print(is_prime(-1))

print(is_prime(3))
print(is_prime(5))
print(is_prime(7))
print(is_prime(41))
print(is_prime(5099))

print(is_prime(4))
print(is_prime(6))
print(is_prime(8))
print(is_prime(9))
print(is_prime(45))
print(is_prime(-5))
print(is_prime(-8))
print(is_prime(-41))

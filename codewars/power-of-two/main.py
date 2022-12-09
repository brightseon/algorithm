def power_of_two(x):
    if x == 0:
        return False

    return (x & (x-1)) == 0


print(power_of_two(0))
print(power_of_two(1))
print(power_of_two(2))
print(power_of_two(5))
print(power_of_two(6))
print(power_of_two(4096))

def multiply(numbers):
    number = 1

    for n in numbers:
        number = number * n

    return number


def product_array(numbers):
    return [multiply(numbers[0:i] + numbers[i+1:]) for i in range(len(numbers))]


print(product_array([12, 20]))
print(product_array([3, 27, 4, 2]))
print(product_array([13, 10, 5, 2, 9]))
print(product_array([16, 17, 4, 3, 5, 2]))

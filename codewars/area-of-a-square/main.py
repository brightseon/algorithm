import math

def square_area(A):
    return round(math.pow((A * 2) / math.pi, 2), 2)

print(square_area(2))
print(square_area(0))
print(square_area(14.05))
print(square_area(1))
print(square_area(100))
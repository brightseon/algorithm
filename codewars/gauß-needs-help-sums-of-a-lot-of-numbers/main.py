def f(n):
    if type(n) != int or n <= 0 : return None
    
    return (n * (n + 1)) / 2


print(f(1))
print(f(100))
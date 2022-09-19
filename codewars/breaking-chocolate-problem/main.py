def break_chocolate(n, m):
    return max(n * m - 1, 0)

print(break_chocolate(5, 5))
print(break_chocolate(7, 4))
print(break_chocolate(1, 1))
print(break_chocolate(0, 0))
print(break_chocolate(6, 1))
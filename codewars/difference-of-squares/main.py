def difference_of_squares(n):

  return (sum(range(1, n + 1)))**2 - sum([num**2 for num in range(1, n + 1)])

print(difference_of_squares(5))
print(difference_of_squares(10))
print(difference_of_squares(100))
def evens_and_odds(n):
  return format(n, 'b' if n % 2 == 0 else 'x')


print(evens_and_odds(2))
print(evens_and_odds(0))
print(evens_and_odds(13))
print(evens_and_odds(47))
print(evens_and_odds(12800))
print(evens_and_odds(8172381723))

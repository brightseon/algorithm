def bingo(array):
  base = ord('a') - 1
  text = 'BINGO'

  if len(text) <= len(
      list(filter(lambda a: a in text, [chr(base + a).upper()
                                        for a in array]))):
    return 'WIN'

  return 'LOSE'


print(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
print(bingo([20, 12, 23, 14, 6, 22, 12, 17, 2, 26]))
print(bingo([1, 2, 3, 7, 5, 14, 7, 15, 9, 10]))
print(bingo([5, 2, 13, 7, 5, 14, 17, 15, 9, 10]))

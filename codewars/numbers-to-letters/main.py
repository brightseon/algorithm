ALPHABET = [
  ' ', '?', '!', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
ALPHABET.reverse()


def switcher(arr):
  return ''.join([ALPHABET[int(a) - 1] for a in arr])


print(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))
print(
  switcher(
    ['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4']))
print(switcher(['4', '24']))
print(switcher(['12']))
print(switcher(['12', '28', '25', '21', '25', '7', '11', '22', '15']))

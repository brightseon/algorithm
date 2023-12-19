ALPHABET = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]


def move_ten(st):
  return ''.join(
    [ALPHABET[(ALPHABET.index(s) + 10) % len(ALPHABET)] for s in st])


print(move_ten("testcase"))
print(move_ten("codewars"))
print(move_ten("exampletesthere"))
print(move_ten("returnofthespacecamel"))
print(move_ten("bringonthebootcamp"))
print(move_ten("weneedanofficedog"))

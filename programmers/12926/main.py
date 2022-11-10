ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

def caesar_cipher(s, n):
  idx = ALPHABET.index(s.upper()) + n
  if len(ALPHABET) - 1 < idx: idx = abs(len(ALPHABET) - idx)
  
  return ALPHABET[idx] if s.isupper() else ALPHABET[idx].lower()

def solution(s, n):
  return ''.join([char if char.isspace() else caesar_cipher(char, n) for char in s])


print(solution('AB', 1))
print(solution('z', 1))
print(solution('a B z', 4))

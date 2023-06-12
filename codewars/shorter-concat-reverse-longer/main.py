def shorter_reverse_longer(a, b):
  shorter = b
  longer = a

  if len(a) < len(b):
    shorter = a
    longer = b

  return shorter + ''.join(list(reversed(longer))) + shorter


print(shorter_reverse_longer("first", "abcde"))
print(shorter_reverse_longer("hello", "bau"))
print(shorter_reverse_longer("abcde", "fghi"))

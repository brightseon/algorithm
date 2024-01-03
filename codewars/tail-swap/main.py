def tail_swap(strings):
  chuk_string = list(map(lambda s: s.split(':'), strings))

  return [
    f'{chuk_string[idx][0]}:{chuk_string[(idx + 1)*-1][-1]}'
    for idx, string in enumerate(strings)
  ]


print(tail_swap(["abc:123", "cde:456"]))
print(tail_swap(["a:12345", "777:xyz"]))
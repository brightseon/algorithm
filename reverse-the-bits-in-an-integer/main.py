def reverse_bits(n):
  return int(''.join(reversed(bin(n).replace('0b', ''))), 2)


print(reverse_bits(417))
print(reverse_bits(267))
print(reverse_bits(0))
print(reverse_bits(2017))
print(reverse_bits(1023))
print(reverse_bits(1024))

def last(s):
  return sorted(s.split(' '), key=lambda s: s[-1])


print(last("man i need a taxi up to ubud"))
print(last("what time are we climbing up the volcano"))
print(last("take me to semynak"))
print(last("massage yes massage yes massage"))
print(last("take bintang and a dance please"))

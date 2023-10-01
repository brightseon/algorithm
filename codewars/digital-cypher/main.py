import math


def encode(message, key):
    str_key = str(key)
    key_len = len(str_key)

    return [ord(m) - 96 + int(str_key[math.floor(i % key_len)]) for i, m in enumerate(message)]


print(encode("scout", 1939))
print(encode("masterpiece", 1939))

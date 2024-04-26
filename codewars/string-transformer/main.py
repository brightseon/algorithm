def string_transformer(s):
    return ' '.join(list(reversed(s.split(' ')))).swapcase()


print(string_transformer("Example string"))
print(string_transformer("Example Input"))
print(string_transformer("To be OR not to be That is the Question"))
print(string_transformer(""))
print(string_transformer("You Know When  THAT  Hotline Bling"))
print(string_transformer(" A b C d E f G "))

from re import sub


def seven_ate9(str_):
  return sub('79(?=7)', '7', str_)


print(seven_ate9('165561786121789797'))
print(seven_ate9('797'))
print(seven_ate9('7979797'))

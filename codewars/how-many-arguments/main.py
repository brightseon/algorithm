def args_count(*args, **kwargs):
  return len(args) + len(kwargs.items())


print(args_count(100))
print(args_count(100, 2, 3))
print(args_count(32, a1=12))
print(args_count())

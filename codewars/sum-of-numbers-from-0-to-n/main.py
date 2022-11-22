def show_sequence(n):
    if n == 0:
        return f'0=0'
    if n < 0:
        return f'{n}<0'

    nums = range(0, n + 1)
    return f'{"+".join(map(lambda n: str(n), nums))} = {sum(nums)}'


print(show_sequence(6))
print(show_sequence(0))
print(show_sequence(-1))
print(show_sequence(-10))

from math import floor


def balanced_num(number):
    nums = [n for n in str(number)]
    size = len(nums)

    if size < 3:
        return 'Balanced'

    is_even = size % 2 == 0
    center = floor(size / 2)
    left = nums[:center]
    right = nums[center * -1:]

    if is_even:
        left = left[:-1]
        right = right[1:]

    left = sum(map(lambda l: int(l), left))
    right = sum(map(lambda r: int(r), right))

    if left == right:
        return 'Balanced'

    return 'Not Balanced'


print(balanced_num(7))
print(balanced_num(959))
print(balanced_num(13))
print(balanced_num(432))
print(balanced_num(424))

print(balanced_num(1024))
print(balanced_num(66545))
print(balanced_num(295591))
print(balanced_num(1230987))
print(balanced_num(56239814))

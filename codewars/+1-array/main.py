def up_array(arr):

  str_num = ''.join([str(a) for a in arr])

  if len(str_num) == 0 or len(str_num) > len(arr):
    return None

  total = int(str_num) + 1

  if len(str(total)) < len(arr):
    total = f'{total:0{len(arr)}}'

  return list(map(lambda s: int(s), list(str(total))))


print(up_array([2, 3, 9]))
print(up_array([9, 9]))
print(up_array([0, 4, 2]))
print(up_array([4, 3, 2, 5]))
print(up_array([1, 2, 3, 9]))
print(up_array([9, 9, 9, 9]))
print(up_array([0, 1, 3, 7]))
print(up_array([1, -9]))

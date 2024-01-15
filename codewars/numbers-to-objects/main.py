def num_obj(s):
  return [{f'{s}': chr(s)} for s in s]


print(num_obj([118, 117, 120]))
print(num_obj([101, 121, 110, 113, 113, 103]))
print(num_obj([118, 103, 110, 109, 104, 106]))
print(num_obj([107, 99, 110, 107, 118, 106, 112, 102]))
print(num_obj([100, 100, 116, 105, 117, 121]))

def partlist(arr):
  return [(' '.join(arr[0:i+1]), ' '.join(arr[i+1:])) for i in range(len(arr) - 1)]


print(partlist(['I', 'wish', 'I', "hadn't", 'come']));
print(partlist(['cdIw', 'tzIy', 'xDu', 'rThG']));
print(partlist(['vJQ', 'anj', 'mQDq', 'sOZ']));
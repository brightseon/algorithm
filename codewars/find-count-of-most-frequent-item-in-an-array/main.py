from collections import Counter


def most_frequent_item_count(collection):
  return max([0] + list(Counter(collection).values()))


print(most_frequent_item_count([3, -1, -1]))
print(most_frequent_item_count([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]))
print(most_frequent_item_count([]))
print(most_frequent_item_count([9]))

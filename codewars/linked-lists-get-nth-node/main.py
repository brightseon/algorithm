# from preloaded import Node

# class Node(object):
#   """Node class for reference"""

#   def __init__(self, data, next=None):
#     self.data = data
#     self.next = next


def get_nth(node, index):

  if not node or index < 0:
    raise IndexError

  n = node

  for i in range(index):
    n = n.next
    if not n:
      raise IndexError

  return n


linked_list = Node(1, Node(2, Node(3, None)))

print(get_nth(linked_list, 0).data)
print(get_nth(linked_list, 1).data)
print(get_nth(linked_list, 2).data)
print(get_nth(linked_list, 3).data)
print(get_nth(linked_list, -1).data)
print(get_nth(linked_list, 100).data)
print(get_nth(None, 100).data)

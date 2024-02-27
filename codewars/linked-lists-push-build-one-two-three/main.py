# from preloaded import Node

'''
Node is defined in preloaded like this:

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
'''


def push(head, data):
    if head == None:
        return Node(data)

    new_node = Node(data)
    new_node.next = head

    return new_node


def build_one_two_three():
    return push(push(push(None, 3), 2), 1)


print(push(None, 1).data)
print(push(None, 1).next)
print(push(Node(1), 2).data)
print(push(Node(1), 2).next.data)

print(build_one_two_three().data)
print(build_one_two_three().next.data)
print(build_one_two_three().next.next.data)
print(build_one_two_three().next.next.next)

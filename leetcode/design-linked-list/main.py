class Node:
    def __init__(self, val) -> None:
        self.val = val
        self.next = None


class MyLinkedList:

    def __init__(self):
        self.head = None
        self.size: int = 0

    def get(self, index: int) -> int:
        if index >= self.size:
            return -1

        node = self.head

        for _ in range(index):
            node = node.next

        return node.val

    def addAtHead(self, val: int) -> None:
        node = Node(val)
        node.next = self.head

        self.head = node
        self.size += 1

    def addAtTail(self, val: int) -> None:
        node = Node(val)

        if self.head is None:
            self.addAtHead(val)
            return

        prev_node = self.head

        for _ in range(self.size - 1):
            prev_node = prev_node.next

        prev_node.next = node
        self.size += 1

    def addAtIndex(self, index: int, val: int) -> None:
        if index == 0:
            self.addAtHead(val)
            return
        if index == self.size:
            self.addAtTail(val)
            return
        if index > self.size:
            return None

        node = Node(val)
        prev_node = self.head

        for _ in range(index - 1):
            prev_node = prev_node.next

        node.next = prev_node.next
        prev_node.next = node
        self.size += 1

    def deleteAtIndex(self, index: int) -> None:
        if index >= self.size:
            return
        if index == 0:
            self.head = self.head.next
            self.size -= 1
            return None

        node = self.head

        for _ in range(index - 1):
            node = node.next

        try:
            node.next = node.next.next
        except:
            node.next = None

        self.size -= 1

# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)


obj = MyLinkedList()

# ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
# [[],[1],[3],[1,2],[1],[1],[1]]
print(obj.addAtHead(1))
print(obj.addAtTail(3))
print(obj.head.next.val)
print(obj.addAtIndex(1, 2))
print(obj.get(1))
print(obj.deleteAtIndex(1))
print(obj.get(1))

# ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
# [[],[1],[3],[1,2],[1],[1],[1]]
# print(obj.addAtHead(1))
# print(obj.addAtTail(3))
# print(obj.addAtIndex(1, 2))
# print(obj.get(1))
# print(obj.deleteAtIndex(1))
# print(obj.get(1))

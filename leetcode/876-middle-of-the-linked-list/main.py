import math

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        node = head
        arr = []

        while node:
            arr += [node]
            node = node.next

        return arr[math.floor(len(arr) / 2)]


print(Solution().middleNode([1, 2, 3, 4, 5]))
print(Solution().middleNode([1, 2, 3, 4, 5, 6]))

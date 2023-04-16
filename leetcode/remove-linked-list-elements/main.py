# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        while(head and head.val == val):
            head = head.next

        node = head

        while(node):
            try:
                if node.next.val == val:
                    node.next = node.next.next
                else:
                    node = node.next
            except:
                node = None

        return head

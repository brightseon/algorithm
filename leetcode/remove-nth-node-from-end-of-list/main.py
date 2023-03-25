from typing import Optional

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        slow = head
        fast = head

        for i in range(n):
            fast = fast.next

        while fast is not None and fast.next is not None:
            fast = fast.next
            slow = slow.next

        if fast is None:
            head = head.next
        else:
            slow.next = slow.next.next

        return head

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        try:
            node = head

            while node:
                newHead = node.next
                node.next = newHead.next
                newHead.next = head
                head = newHead

            return head

        except:
            return head

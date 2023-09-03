# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return head

        odd = head
        even = head.next
        even_head = even

        while odd and odd.next and even and even.next:
            odd.next = even.next
            odd = odd.next
            even.next = odd.next
            even = even.next

        odd.next = even_head

        return head


print(Solution().oddEvenList([1, 2, 3, 4, 5]))
print(Solution().oddEvenList([2, 1, 3, 5, 6, 4, 7]))

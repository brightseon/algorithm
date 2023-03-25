/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let slow = head,
        fast = head;

    while (n--) {
        fast = fast.next;
    }

    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    if (!fast) {
        head = head.next;
    } else {
        slow.next = slow?.next?.next || null;
    }

    return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head?.next) return head;
    let node = head;

    while (node && node.next) {
        const newHead = node.next;
        node.next = newHead.next;
        newHead.next = head;
        head = newHead;
    }

    return head;
};

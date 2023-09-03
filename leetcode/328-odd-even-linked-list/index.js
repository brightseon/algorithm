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
var oddEvenList = function (head) {
    if (!head) {
        return head;
    }

    let odd = head,
        even = head.next,
        evenHead = even;

    while (odd && odd.next && even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;

    return head;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function arrayToListNode(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

console.log(oddEvenList(arrayToListNode([1, 2, 3, 4, 5])));
console.log(oddEvenList(arrayToListNode([2, 1, 3, 5, 6, 4, 7])));

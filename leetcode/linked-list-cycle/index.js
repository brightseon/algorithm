/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    const run = (slow, fast) => {
        if (!slow || !fast) return false;
        if (slow === fast.next) return true;

        return run(slow.next, fast.next?.next || null);
    };

    return run(head, head?.next || null);
};

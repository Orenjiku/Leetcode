/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const before = new ListNode(0, head);
    let prev = before;

    while (--left) {
        prev = prev.next;
        --right;
    }

    let cur = prev.next;
    while (--right) {
        let next = cur.next;
        cur.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return before.next;
}
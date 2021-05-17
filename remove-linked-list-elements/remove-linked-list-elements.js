/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const newHead = new ListNode(0, head);
    let left = newHead;
    let right = head;
    while (right !== null) {
        if (right.val === val && right.next !== null) {
            right = right.next;
        } else if (right.val === val && right.next === null) {
            left.next = null;
            right = right.next;
        } else {
            left.next = right;
            left = right;
            right = right.next;
        }
    }
    return newHead.next;
}; 
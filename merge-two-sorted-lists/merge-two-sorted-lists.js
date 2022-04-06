/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1 && l2 && l1.val > l2.val) return mergeTwoLists(l2, l1);
    let head = l1;
    while (l1 !== null && l2 !== null) {
        if (l1.next && l1.next.val < l2.val) {
            l1 = l1.next;
        } else {
            const next1 = l1.next;
            const next2 = l2.next;
            l1.next = l2;
            l2.next = next1;
            l1 = l2;
            l2 = next2;
        }
    }
    return head;
};
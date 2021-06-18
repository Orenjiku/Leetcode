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
    if (!l1 || !l2) return l1 || l2;
    if (l1?.val > l2?.val) return mergeTwoLists(l2, l1);
    const head = l1;
    while (l1 !== null && l2 !== null) {
        if (l1.next === null) {
            l1.next = l2;
            break;
        }
        if (l1.next.val <= l2.val) {
            l1 = l1.next;
        } else {
            const temp = l1.next;
            l1.next = l2;
            l2 = temp;
        }
    }
    return head;
};
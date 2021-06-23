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
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    const l3 = new ListNode(0);
    let cur = l3;
    while (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const total = val1 + val2 + carry;
        const value = total % 10;
        carry = Math.floor(total / 10);
        cur.next = new ListNode(value);
        cur = cur.next;
        l1 = !l1 ? null : l1.next;
        l2 = !l2 ? null : l2.next; 
    }
    if (carry > 0) cur.next = new ListNode(1);
    return l3.next;
};
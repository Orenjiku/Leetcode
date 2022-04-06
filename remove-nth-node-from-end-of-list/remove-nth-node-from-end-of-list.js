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
var removeNthFromEnd = function(head, n) {
    let prevLeft = null
    let left = head;
    let right = head;
    while (right !== null) {
        prevLeft = left;
        if (n <= 0) left = left.next;
        right = right.next;
        n--;
    }
    
    if (left === head) {
        return head.next;
    } else {
        prevLeft.next = left.next !== null ? left.next : null;
        return head;   
    }
};
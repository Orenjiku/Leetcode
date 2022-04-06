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
        right = right.next;
        prevLeft = left;
        if (n <= 0) left = left.next;
        n--;
    }
    
    if (left === head) {
        return head.next;
    } else if (left.next !== null) {
        prevLeft.next = left.next;
        return head;
    } else if (!left.next) {
        prevLeft.next = null;
        return head;
    }
};
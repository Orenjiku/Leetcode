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
    let length = 0;
    let p1 = head;
    while (p1) {
        length++;
        p1 = p1.next;
    }
    
    let count = length - n - 1;
    let p2 = head;
    while (count > 0) {
        count--;
        p2 = p2.next;
    }
    
    if (count < 0) {
        return head.next;
    } else {
        p2.next = p2.next.next;
    }
    return head;
};
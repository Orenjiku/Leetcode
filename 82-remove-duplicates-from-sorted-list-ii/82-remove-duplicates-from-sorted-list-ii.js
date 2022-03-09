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
var deleteDuplicates = function(head) {
    if (!head) return null;
    let prev = null;
    let cur = head;
    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            while (cur.next && cur.val === cur.next.val) {
                cur = cur.next;
            }
            if (prev === null) {
                head = cur.next;
                cur = head;
            } else {
                prev.next = cur.next;
                cur = cur.next;
            }
        } else {
            prev = cur;
            cur = cur.next;
        }
    }
    return head;
};
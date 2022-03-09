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
    let next = cur.next;
    while (next) {
        if (cur.val === next.val) {
            while (next && cur.val === next.val) {
                next = next.next;
            }
            if (prev === null) {
                head = next;
                cur = head;
            } else {
                prev.next = next;
                cur = next;
            }
            next = next !== null ? cur.next : next;
        } else {
            prev = cur;
            cur = next;
            next = cur.next;
        }
    }
    return head;
};
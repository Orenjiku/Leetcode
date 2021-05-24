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
    let cur = head;
    while (cur !== null) {
        const prev = cur;
        while (cur.next && cur.val === cur.next.val) {
            cur = cur.next;
        }
        prev.next = cur.next;
        cur = prev.next;
    }
    return head;
};
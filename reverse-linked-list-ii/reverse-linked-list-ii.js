/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let nodeIdx = 1;
    let p = head;
    let lp = left === 1 && null;
    let rp;
    while (p !== null) {
        if (nodeIdx === left - 1) lp = p;
        if (nodeIdx === right) rp = p.next;
        p = p.next;
        nodeIdx++;
    }
    
    let cur = head;
    let prev = rp;
    nodeIdx = 1;
    while (nodeIdx <= right) {
        if (nodeIdx >= left && nodeIdx <= right) {
            let temp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = temp;
            if (nodeIdx === right) {
                if (lp === null) return prev;
                else lp.next = prev;
            }
        } else {
            cur = cur.next;
        }
        nodeIdx++;
    }
    return head;
};
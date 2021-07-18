/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let tempHead = new ListNode(0, head);
    const result = tempHead;
    let node = head;
    let count = 1;
    while (node !== null && node.next !== null) {
        node = node.next;
        count++;
        if (count === k) {
            const cur = tempHead.next;
            const prev = node.next; 
            tempHead.next = reverseList(cur, prev, k);
            tempHead = cur;
            count = 1;
            node = tempHead.next;
        }
    }
    return result.next;
};

const reverseList = (cur, prev, k) => {
    while (k > 0) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        k--;
    }
    return prev;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const lowStartNode = new ListNode(0);
    const highStartNode = new ListNode(0);
    let lowNode = lowStartNode;
    let highNode = highStartNode;
    while (head !== null) {
        if (head.val < x) {
            lowNode.next = head;
            lowNode = lowNode.next;
        } else {
            highNode.next = head;
            highNode = highNode.next;
        }
        head = head.next;
    }
    lowNode.next = highStartNode.next;
    highNode.next = null;
    return lowStartNode.next;
};
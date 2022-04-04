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
var swapNodes = function(head, k) {
    let leftIdx = 1;
    let rightIdx = 1;
    let leftNode = head;
    let right = head;
    let left = head;
    while (right !== null) {
        if (rightIdx === k) leftNode = right;
        right = right.next;
        rightIdx++;
        if (rightIdx - leftIdx > k) {
            left = left.next;
            leftIdx++;
        }
    }
    swapVals(leftNode, left);
    return head;
};

const swapVals = (node1, node2) => {
    let temp = node1.val;
    node1.val = node2.val;
    node2.val = temp;
}
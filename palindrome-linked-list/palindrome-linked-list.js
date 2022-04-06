/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str1 = '';
    let str2 = '';
    let node = head;
    while (node !== null) {
        str1 += node.val;
        node = node.next;
    }
    
    let reverseNode = reverseLinkedList(head);
    while (reverseNode !== null) {
        str2 += reverseNode.val;
        reverseNode = reverseNode.next
    }
    return str1 === str2;
};

const reverseLinkedList = (head) => {
    if (head.next === null) return head;
    const tmp = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null;
    return tmp;
}
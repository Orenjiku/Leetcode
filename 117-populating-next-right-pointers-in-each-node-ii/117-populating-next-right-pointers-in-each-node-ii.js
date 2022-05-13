/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    preorderTraversal(root);
    return root;
};

const preorderTraversal = (node) => {
    if (!node) return;
    if (node.left && node.right) node.left.next = node.right;
    let rightSibling = node.next;
    while (rightSibling !== null && rightSibling.next !== null && !rightSibling.left && !rightSibling.right) {
        rightSibling = rightSibling.next;
    }
    if (rightSibling !== null) {
        if (node.right) {
            node.right.next = rightSibling.left || rightSibling.right;
        } else if (node.left) {
            node.left.next = rightSibling.left || rightSibling.right
        }
    }
    if (node.right) preorderTraversal(node.right);
    if (node.left) preorderTraversal(node.left);
}
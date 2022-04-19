/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return traverse(root).isBalanced;
};

const traverse = (node) => {
    if (node === null) return {length: 0, isBalanced: true};
    const left = traverse(node.left);
    const right = traverse(node.right);
    const isBalanced = left.isBalanced && right.isBalanced && Math.abs(left.length - right.length) <= 1;
    return {length: Math.max(left.length, right.length) + 1, isBalanced}
}
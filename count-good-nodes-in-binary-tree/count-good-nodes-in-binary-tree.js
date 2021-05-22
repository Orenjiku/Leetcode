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
 * @return {number}
 */
var goodNodes = function(root) {
    result = 0;
    const traverse = (node, maxVal) => {
        if (!node) return;
        if (node.val >= maxVal) result += 1;
        traverse(node.left, Math.max(node.val, maxVal));
        traverse(node.right, Math.max(node.val, maxVal));
    }
    traverse(root, root.val);
    return result;
};
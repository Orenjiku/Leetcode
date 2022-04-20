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
    const traverse = (root, max = -Infinity) => {
        if (root === null) return 0;
        let result = root.val >= max ? 1 : 0;
        result += traverse(root.left, Math.max(max, root.val));
        result += traverse(root.right, Math.max(max, root.val));
        return result
    }
    return traverse(root);
};
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) return []
    const result = [];
    const nodes = [root];
    while (nodes.length > 0) {
        const len = nodes.length;
        const level = [];
        for (let i = 0; i < len; i++) {
            const node = nodes.shift();
            level.push(node.val);
            if (node.left) nodes.push(node.left)
            if (node.right) nodes.push(node.right);
        }
        result.push(level);
    }
    return result;
};
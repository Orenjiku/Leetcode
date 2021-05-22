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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const map = {};
    to_delete.forEach(num => map[num] = true);
    const result = [];
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        traverse(node.right);
        if (map[node.val]) {
            if (node.left && !map[node.left.val]) result.push(node.left);
            if (node.right && !map[node.right.val]) result.push(node.right);
        }
        if (node.left && map[node.left.val]) node.left = null;
        if (node.right && map[node.right.val]) node.right = null;
    }
    traverse(root);
    if (!map[root.val]) result.push(root);
    return result;
};
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let vals = [];
    const go = (node, mode) => {
        if (!node) return;
        go(node.left, mode);
        if (mode === 'get') {
            vals.push(node.val);
        } else {
            node.val = vals.shift();
        }
        go(node.right, mode);
    };

    go(root, 'get');
    vals.sort((a,b) => a - b);
    go(root, 'set');

    return root;
};
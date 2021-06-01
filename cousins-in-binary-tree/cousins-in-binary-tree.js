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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xInfo = [null, null];
    let yInfo = [null, null];
    const traverse = (node, parent, depth) => {
        if (!node) return;
        if (node.val === x) {
            xInfo[0] = parent;
            xInfo[1] = depth;
        } else if (node.val === y) {
            yInfo[0] = parent;
            yInfo[1] = depth;
        }
        if (node.left) traverse(node.left, node.val, depth + 1);
        if (node.right) traverse(node.right, node.val, depth + 1);
    }
    traverse(root, null, 0);
    return xInfo[0] !== yInfo[0] && xInfo[1] === yInfo[1]
};
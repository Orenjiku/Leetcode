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
 * @return {string}
 */
var tree2str = function(root) {
    let str = '';
    const traverse = (node, isRightBranch) => {
        if (!node && isRightBranch) {
            str += '()'
            return
        } else if (!node && !isRightBranch) {
            return;
        }
        str += '(' + node.val;
        traverse(node.left, node.right);
        traverse(node.right, node.right);
        str += ')'
    }
    traverse(root, false);
    str = str.slice(1, -1)
    return str;
};
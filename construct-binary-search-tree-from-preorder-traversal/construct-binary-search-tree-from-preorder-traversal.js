/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let i = 0;
    const traverse = (low, high) => {
        if (i === preorder.length) return null;
        if (preorder[i] >= low && preorder[i] < high) {
            const node = new TreeNode(preorder[i]);
            i++;
            node.left = traverse(low, node.val);
            node.right = traverse(node.val, high);
            return node;
        }
        return null;
    }
    return traverse(-Infinity, Infinity);
};
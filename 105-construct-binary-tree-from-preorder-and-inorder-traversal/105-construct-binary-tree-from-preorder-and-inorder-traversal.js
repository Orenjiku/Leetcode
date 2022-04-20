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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const traverse = (i, preorder, inorder) => {
        if (inorder.length === 0) return null;
        const node = new TreeNode(preorder[i]);
        const idx = inorder.findIndex(num => num === node.val);
        node.left = traverse(i + 1, preorder, inorder.slice(0, idx));
        node.right = traverse(i + idx + 1, preorder, inorder.slice(idx + 1, inorder.length));
        return node;
    }
    return traverse(0, preorder, inorder);
};
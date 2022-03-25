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
    const traverse = (preIdx, inStart, inEnd) => {
        if (preIdx > preorder.length - 1 || inStart > inEnd) return null;
        const root = new TreeNode(preorder[preIdx]);
        const inIdx = inorder.indexOf(preorder[preIdx]);
        root.left = traverse(preIdx + 1, inStart, inIdx - 1);
        root.right = traverse(preIdx + inIdx - inStart + 1, inIdx + 1, inEnd);
        return root;
    }
    return traverse(0, 0, inorder.length - 1);
};
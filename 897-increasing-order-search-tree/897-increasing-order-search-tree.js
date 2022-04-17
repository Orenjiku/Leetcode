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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let cur = new TreeNode(0);
    const result = cur;
    
    const traverse = (node) => {
        if (node === null) return;
        traverse(node.left);
        node.left = null;
        cur.right = node
        cur = node;
        traverse(node.right);
    }
    
    traverse(root, cur);
    return result.right;
};
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
var convertBST = function(root) {
    traverse(root, {sum: 0});
    return root;
};

const traverse = (node, obj) => {
    if (node === null) return;
    traverse(node.right, obj);
    obj.sum += node.val;
    node.val = obj.sum;
    traverse(node.left, obj);
    return node;
}
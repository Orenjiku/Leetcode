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
    const total = sumBSTNodes(root);
    traverse(root, [total]);
    return root;
};

const sumBSTNodes = (node) => {
    if (node === null) return 0;
    const left = sumBSTNodes(node.left);
    const right = sumBSTNodes(node.right);
    return node.val + left + right;
}

const traverse = (node, arr) => {
    if (node === null) return;
    traverse(node.left, arr);
    const nodeVal = node.val;
    node.val = arr[0];
    arr[0] -= nodeVal;
    traverse(node.right, arr);
}
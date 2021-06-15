/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const arr1 = [];
    const arr2 = [];
    traverse(root1, arr1);
    traverse(root2, arr2);
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
};

const traverse = (node, arr) => {
    if (!node.left && !node.right) {
        arr.push(node.val);
        return;
    }
    if (node.left) traverse(node.left, arr);
    if (node.right) traverse(node.right, arr);
} 
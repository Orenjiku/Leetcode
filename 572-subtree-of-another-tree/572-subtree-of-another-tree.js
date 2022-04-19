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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (root === null) return false;
    const left = isSubtree(root.left, subRoot);
    const right = isSubtree(root.right, subRoot);
    if (root.val === subRoot.val) return matchSubRoot(root, subRoot) || left || right;
    return left || right;
}

const matchSubRoot = (root, subRoot) => {
    if (root === null && subRoot === null) return true;
    if (root === null || subRoot === null) return false;
    const left = matchSubRoot(root.left, subRoot.left);
    const right = matchSubRoot(root.right, subRoot.right);
    return root.val === subRoot.val && left && right;
}
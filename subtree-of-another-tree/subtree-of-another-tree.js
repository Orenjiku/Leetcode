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
    if (root === null) return false
    if (isSameTree(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

const isSameTree = (root, subRoot) => {
    if (root && subRoot) {
        return root.val === subRoot.val && isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
    }
    return root === subRoot
}
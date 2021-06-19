/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    const traverse = (node1, node2, target) => {
        if (node1 === target) return node2;
        if (!node1 && !node2) return null;
        const left = traverse(node1.left, node2.left, target);
        const right = traverse(node1.right, node2.right, target);
        return left || right;
    }
    return traverse(original, cloned, target)
};
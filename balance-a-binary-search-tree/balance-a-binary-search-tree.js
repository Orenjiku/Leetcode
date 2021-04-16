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
var balanceBST = function(root) {
    let nodes = [];
    const traverse = (node) => {
        if (node.left) traverse(node.left);
        nodes.push(node.val);
        if (node.right) traverse(node.right);
    }
    traverse(root);

    const balance = (arr) => {
        let mid = Math.floor(arr.length / 2);
        if (arr.length === 0) return null;
        const node = new TreeNode(arr[mid]);
        node.left = balance(arr.slice(0, mid));
        node.right = balance(arr.slice(mid + 1, arr.length));
        return node;
    }
    return balance(nodes)
};
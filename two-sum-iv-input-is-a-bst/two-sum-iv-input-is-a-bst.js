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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const arr = [];
    const traverse = (node) => {
        if (!node) return;
        traverse(node.left);
        arr.push(node.val);
        traverse(node.right);
    } 
    traverse(root);

    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        const sum = arr[l] + arr[r]
        if (sum === k) return true;
        else if (sum > k ) r--;
        else if (sum < k) l++;
    }
    return false;
};
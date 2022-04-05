/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const trie = new Trie();
    trie.build(strs);

    let longestPrefix = '';
    let curNode = trie.root;
    while (Object.keys(curNode.children).length === 1 && curNode.end === false) {
        const letter = Object.keys(curNode.children)[0];
        longestPrefix += letter;
        curNode = curNode.children[letter]
    }
    return longestPrefix;
};

class TrieNode {
    constructor(char) {
        this.char = char;
        this.children = {};
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('');
    }
    
    build(array) {
        for (let i = 0; i < array.length; i++) {
            let curNode = this.root;
            for (let j = 0; j < array[i].length; j++) {
                const char = array[i][j];
                if (!curNode.children[char]) curNode.children[char] = new TrieNode(char);
                curNode = curNode.children[char];
            }
            curNode.end = true;
        }
    }
}
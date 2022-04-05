/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const trie = new Trie();
    trie.build(strs);

    let longestPrefix = '';
    let curTrie = trie;
    while (Object.keys(curTrie.children).length === 1 && curTrie.end === false) {
        const letter = Object.keys(curTrie.children)[0];
        longestPrefix += letter;
        curTrie = curTrie.children[letter]
    }
    return longestPrefix;
};

class Trie {
    constructor(value) {
        this.value = '';
        this.children = {};
        this.end = false;
    }
    
    build(array) {
        for (let i = 0; i < array.length; i++) {
            let curTrie = this;
            if (array[i] === '') {
                curTrie.children[''] = new Trie('');
            } else {
                for (let j = 0; j < array[i].length; j++) {
                    const letter = array[i][j];
                    if (!curTrie.children[letter]) curTrie.children[letter] = new Trie(letter);
                    curTrie = curTrie.children[letter];
                }    
            }
            curTrie.end = true;
        }
    }
}
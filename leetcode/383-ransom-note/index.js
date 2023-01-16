/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    let map = {};

    for (const letter of magazine) {
        map[letter] = ++map[letter] || 1;
    }

    for (const letter of ransomNote) {
        if (!map[letter]) return false;

        --map[letter];
    }

    return true;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));

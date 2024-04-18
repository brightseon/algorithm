function longestPalindrome(s) {
    const size = s.length;

    if (size < 2) return size;
    let maxLength = 1;

    for (let i = 0; i < size - 1; i++) {
        const str = s.slice(i, i + 2);

        if (str === str.split('').reverse().join('')) {
            maxLength = 2;
            break;
        }
    }

    for (let length = 3; length <= size; length++) {
        for (let i = 0; i <= size - length; i++) {
            const j = length + i;
            const str = s.slice(i, j);

            if (str === str.split('').reverse().join('')) {
                maxLength = length;
                break;
            }
        }
    }

    return maxLength;
}

console.log(longestPalindrome('a'));
console.log(longestPalindrome('aa'));
console.log(longestPalindrome('baa'));
console.log(longestPalindrome('aab'));
console.log(longestPalindrome('zyabyz'));
console.log(longestPalindrome('BaaBcd'));
console.log(longestPalindrome('baablkj12345432133d'));

console.log(longestPalindrome(''));
console.log(longestPalindrome('Aa'));

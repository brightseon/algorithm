function isPalindrome(line) {
    return `${line}` === `${line}`.split('').reverse().join('');
}

console.log(isPalindrome('anna'));
console.log(isPalindrome('walter'));
console.log(isPalindrome('12321'));
console.log(isPalindrome('123456'));
console.log(isPalindrome('.'));
console.log(isPalindrome('.!!.'));

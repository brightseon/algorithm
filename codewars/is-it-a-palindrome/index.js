function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}

console.log(isPalindrome('a'));
console.log(isPalindrome('aba'));
console.log(isPalindrome('Abba'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('Bob'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('AbBa'));
console.log(isPalindrome(''));

function isPangram(string) {
    return new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('This is not a pangram.'));

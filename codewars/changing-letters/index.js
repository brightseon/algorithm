function swap(string) {
    return string.replace(/a|e|i|o|u/g, (str) => str.toUpperCase());
}

console.log(swap(''));
console.log(swap('   @@@'));
console.log(swap('HelloWorld!'));
console.log(swap('Sunday'));
console.log(swap('Codewars'));
console.log(swap('Monday'));

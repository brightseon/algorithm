function lowercaseCount(str) {
    return str.replace(/[^a-z]/g, '').length;
}

console.log(lowercaseCount('abc'));
console.log(lowercaseCount('abcABC123'));
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
console.log(lowercaseCount(''));
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
console.log(lowercaseCount('abcdefghijklmnopqrstuvwxyz'));

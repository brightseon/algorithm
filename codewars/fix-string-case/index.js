function solve(s) {
    const upperCount = s.replace(/[a-z]/g, '').length;
    const lowerCount = s.length - upperCount;

    if (lowerCount >= upperCount) return s.toLowerCase();

    return s.toUpperCase();
}

console.log(solve('code'));
console.log(solve('CODe'));
console.log(solve('COde'));
console.log(solve('Code'));

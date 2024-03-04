function sameCase(a, b) {
    if (/[^a-z]/gi.test(a) || /[^a-z]/gi.test(b)) return -1;

    const upperA = a.toUpperCase();
    const upperB = b.toUpperCase();

    if ((upperA === a && upperB === b) || (upperA !== a && upperB !== b)) return 1;

    return 0;
}

console.log(sameCase('C', 'B'));
console.log(sameCase('b', 'a'));
console.log(sameCase('d', 'd'));
console.log(sameCase('A', 's'));
console.log(sameCase('c', 'B'));
console.log(sameCase('b', 'Z'));
console.log(sameCase('\t', 'Z'));
console.log(sameCase('H', ':'));

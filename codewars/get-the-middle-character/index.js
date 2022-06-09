function getMiddle(s) {
    let middle = s.charAt(s.length / 2);
    if (s.length % 2 === 0) middle = `${s.charAt(s.length / 2 - 1)}${middle}`;

    return middle;
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));

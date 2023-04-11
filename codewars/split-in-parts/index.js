var splitInParts = function (s, partLength) {
    return Array(Math.ceil(s.length / partLength))
        .fill(partLength)
        .map((n, i) => s.slice(i * n, i * n + partLength))
        .join(' ');
};

console.log(splitInParts('supercalifragilisticexpialidocious', 3));
console.log(splitInParts('HelloKata', 1));
console.log(splitInParts('HelloKata', 9));

function generateShape(integer) {
    return Array(integer).fill('+'.padEnd(integer, '+')).join('\n');
}

console.log(generateShape(8));
console.log(generateShape(3));

function expressionMatter(a, b, c) {
    return Math.max(...[a + b + c, a * b * c, (a + b) * c, a * (b + c)]);
}

console.log(expressionMatter(2, 1, 2));
console.log(expressionMatter(2, 1, 1));
console.log(expressionMatter(1, 1, 1));
console.log(expressionMatter(1, 2, 3));
console.log(expressionMatter(1, 3, 1));
console.log(expressionMatter(2, 2, 2));

console.log(expressionMatter(5, 1, 3));
console.log(expressionMatter(3, 5, 7));
console.log(expressionMatter(5, 6, 1));
console.log(expressionMatter(1, 6, 1));
console.log(expressionMatter(2, 6, 1));
console.log(expressionMatter(6, 7, 1));

console.log(expressionMatter(2, 10, 3));
console.log(expressionMatter(1, 8, 3));
console.log(expressionMatter(9, 7, 2));
console.log(expressionMatter(1, 1, 10));
console.log(expressionMatter(9, 1, 1));
console.log(expressionMatter(10, 5, 6));
console.log(expressionMatter(1, 10, 1));
console.log(expressionMatter(5, 7, 2));

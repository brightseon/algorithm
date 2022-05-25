function problem(x) {
    if (typeof x === 'string') return 'Error';
    return x * 50 + 6;
}

console.log(problem('hello'));
console.log(problem(1));
console.log(problem(5));
console.log(problem(0));
console.log(problem(1.2));
console.log(problem(3));
console.log(problem('RyanIsCool'));
console.log(problem(-3));
console.log(problem(''));
console.log(problem(0.03));

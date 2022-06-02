function plural(n) {
    return n !== 1;
}

console.log(plural(0));
console.log(plural(0.5));
console.log(plural(1));
console.log(plural(100));
console.log(plural(Infinity));

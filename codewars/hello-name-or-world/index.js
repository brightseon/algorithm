function hello(name) {
    const n = name || 'world';
    return `Hello, ${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()}!`;
}

console.log(hello('alice'));
console.log(hello());
console.log(hello(''));
console.log(hello('johN'));

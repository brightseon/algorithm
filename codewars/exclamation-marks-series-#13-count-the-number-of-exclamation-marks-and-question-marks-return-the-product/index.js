function product(string) {
    const exclamationMarks = string.replace(/[^!]/g, '').length;
    const questionMarks = string.replace(/[^?]/g, '').length;

    return exclamationMarks * questionMarks;
}

console.log('');
console.log('!');
console.log('!!');
console.log('!??');
console.log('!???');
console.log('!!!??');
console.log('!!!???');
console.log('!???!!');
console.log('!ab? ?');
console.log('!????!!!?');

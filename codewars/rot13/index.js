function rot13(message) {
    const lowerA = 'a'.charCodeAt(0),
        upperA = 'A'.charCodeAt(0);
    return message
        .split('')
        .map((m) => {
            if (/[^a-zA-Z]/gi.test(m)) return m;
            let standard = /[A-Z]/g.test(m) ? upperA : lowerA;
            const code = m.charCodeAt(0);

            return standard + 13 <= code
                ? String.fromCharCode(code - 13)
                : String.fromCharCode(code + 13);
        })
        .join('');
}

console.log(rot13('test'));
console.log(rot13('Test'));
console.log(rot13('Test!'));

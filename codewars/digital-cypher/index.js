function encode(str, n) {
    return str.split('').map((s, i) => {
        return s.charCodeAt() - 96 + +`${n}`[Math.floor(i % `${n}`.length)];
    });
}

console.log(encode('scout', 1939));
console.log(encode('masterpiece', 1939));

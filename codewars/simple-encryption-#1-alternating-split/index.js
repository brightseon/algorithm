function encrypt(text, n) {
    if (!text || n < 1) return text;

    const str = text
        .split('')
        .reduce(
            (a, b, i) => {
                a[i % 2 > 0 ? 0 : 1] = `${a[i % 2 > 0 ? 0 : 1]}${b}`;
                return [a[0], a[1]];
            },
            ['', '']
        )
        .join('');

    return encrypt(str, n - 1);
}

function decrypt(encryptedText, n) {
    if (!encryptedText || n < 1) return encryptedText;

    const oddEnd = Math.floor(encryptedText.length / 2);
    const str = encryptedText
        .split('')
        .reduce(
            (a, b, i) => {
                i < oddEnd ? (a[2 * i + 1] = b) : (a[2 * (i - oddEnd)] = b);

                return a;
            },
            [...encryptedText.split('')]
        )
        .join('');

    return decrypt(str, n - 1);
}

console.log(encrypt('This is a test!', 0));
console.log(encrypt('This is a test!', 1));
console.log(encrypt('This is a test!', 2));
console.log(encrypt('This is a test!', 3));
console.log(encrypt('This is a test!', 4));
console.log(encrypt('This is a test!', -1));
console.log(encrypt('This kata is very interesting!', 1));

console.log(decrypt('This is a test!', 0));
console.log(decrypt('hsi  etTi sats!', 1));
console.log(decrypt('s eT ashi tist!', 2));
console.log(decrypt(' Tah itse sits!', 3));
console.log(decrypt('This is a test!', 4));
console.log(decrypt('This is a test!', -1));
console.log(decrypt('hskt svr neetn!Ti aai eyitrsig', 1));

console.log(encrypt('', 0));
console.log(decrypt('', 0));
console.log(encrypt(null, 0));
console.log(decrypt(null, 0));

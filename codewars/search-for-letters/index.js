function change(string) {
    let letters = '0'.repeat(26);
    const str = string
        .replace(/[^a-z]/gi, '')
        .toLowerCase()
        .split('');

    for (let i = 0; i < str.length; i++) {
        const idx = str[i].charCodeAt(0) - 97;

        letters = letters.substring(0, idx) + '1' + letters.substring(idx + 1);
    }

    return letters;
}

console.log(change('a **&  bZ'));

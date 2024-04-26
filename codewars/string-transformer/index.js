function stringTransformer(str) {
    return str
        .replace(/[a-z]/gi, (str) =>
            str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
        )
        .split(' ')
        .reverse()
        .join(' ');
}

console.log(stringTransformer('Example string'));

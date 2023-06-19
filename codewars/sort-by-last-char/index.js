function last(x) {
    return x.split(' ').sort((a, b) => {
        const aLastChar = a[a.length - 1];
        const bLastChar = b[b.length - 1];

        if (aLastChar > bLastChar) return 1;
        else if (bLastChar > aLastChar) return -1;

        return 0;
    });
}

console.log(last('man i need a taxi up to ubud'));
console.log(last('what time are we climbing up the volcano'));
console.log(last('take me to semynak'));

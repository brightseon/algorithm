function aliasGen(f, l) {
    if (!(/^[A-Z]/i.test(f) && /^[A-Z]/i.test(l)))
        return 'Your name must start with a letter from A - Z.';

    return `${firstName[f[0].toUpperCase()]} ${surname[l[0].toUpperCase()]}`;
}

console.log(aliasGen('Mike', 'Millington'));
console.log(aliasGen('Fahima', 'Tash'));
console.log(aliasGen('Daisy', 'Petrovic'));
console.log(aliasGen('7393424', 'Anumbha'));
console.log(aliasGen('Anuddanumbha', '23200'));

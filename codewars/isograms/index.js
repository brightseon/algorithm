const isIsogram = (str) => {
    if (str.length === 0) return true;

    const chars = str.toLocaleLowerCase().split('');
    const isogram = (chars, idx) => {
        const char = chars[idx];
        console.log(char);
        if (str.replace(new RegExp(char, 'gi'), '').length + 1 !== str.length) return false;
        if (str.length - 1 === idx) return true;

        return isogram(chars, ++idx);
    };

    return isogram(chars, 0);
};

// -----------------------------------------------------------------------
// const isIsogram = str => !/(\w).*\1/i.test(str);

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('isogram'));
console.log(isIsogram('aba'));
console.log(isIsogram('moOse'));
console.log(isIsogram('isIsogram'));
console.log(isIsogram(''));

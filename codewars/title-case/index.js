function titleCase(title, minorWords = '') {
    if (!title) return title;
    const regExp = new RegExp(`^(${minorWords.split(' ').join('|')})`, 'i');

    return title
        .split(' ')
        .map((t, i) => {
            if (i !== 0 && minorWords && regExp.test(t)) return t.toLowerCase();

            return `${t.charAt(0).toUpperCase()}${t.slice(1).toLowerCase()}`;
        })
        .join(' ');
}

console.log(titleCase(''));
console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('the quick brown fox'));

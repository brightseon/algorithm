function incrementString(str) {
    if (!str.match(/[\d$]/)) return `${str}1`;
    const num = str.replace(/[^\d]/gi, '');

    return `${str.replace(/[\d$]/g, '')}${(+num + 1).toString().padStart(num.length, 0)}`;
}

console.log(incrementString('foobar000'));
console.log(incrementString('foo'));
console.log(incrementString('foobar001'));
console.log(incrementString('foobar99'));
console.log(incrementString('foobar099'));
console.log(incrementString(''));
console.log(incrementString('foobar00999'));

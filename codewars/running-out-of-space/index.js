function spacey(array) {
    return [array[0], ...array.slice(1).map((a, i) => `${array.slice(0, i + 1).join('')}${a}`)];
}

console.log(spacey(['kevin', 'has', 'no', 'space']));
console.log(spacey(['this', 'cheese', 'has', 'no', 'holes']));

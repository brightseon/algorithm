function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(['Beg', 'Life', 'I', 'To']));
console.log(sortByLength(['', 'Moderately', 'Brains', 'Pizza']));
console.log(sortByLength(['Longer', 'Longest', 'Short']));

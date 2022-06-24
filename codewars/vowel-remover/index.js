function shortcut(string) {
    return string.replace(/[aeiou]/gi, '');
}

console.log(shortcut('hello'));
console.log(shortcut('how are you today?'));
console.log(shortcut('complain'));
console.log(shortcut('never'));

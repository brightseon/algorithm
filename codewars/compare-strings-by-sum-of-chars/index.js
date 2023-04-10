const sum = (s) => {
    return s.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
};

function compare(s1, s2) {
    return (
        sum((/^[a-z]+$/gi.test(s1 || '') ? s1 : '').toUpperCase()) ===
        sum((/^[a-z]+$/gi.test(s2 || '') ? s2 : '').toUpperCase())
    );
}

console.log(compare('AD', 'BC'));
console.log(compare('AD', 'DD'));
console.log(compare('gf', 'FG'));
console.log(compare('Ad', 'DD'));
console.log(compare('zz1', ''));
console.log(compare('ZzZz', 'ffPFF'));
console.log(compare('kl', 'lz'));
console.log(compare('!!', '7476'));
console.log(compare('##', '1176'));

console.log(compare(null, 'BC'));
console.log(compare(null, null));
console.log(compare(null, ''));
console.log(compare('', ''));

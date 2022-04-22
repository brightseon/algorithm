function getCount(str) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];

    return str.split('').filter((s) => VOWELS.indexOf(s) >= 0).length;
}

// -------------------------------------------------------------------------
// function getCount(str) {
//     return (str.match(/[aeiou]/ig) || []).length;
// }

console.log(getCount('abracadabra'));

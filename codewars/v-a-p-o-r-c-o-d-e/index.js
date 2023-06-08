function vaporcode(string) {
    return string.replace(' ', '').toUpperCase().split('').join('  ');
}

console.log(vaporcode('Lets go to the movies'));
console.log(vaporcode('Why isnt my code working'));

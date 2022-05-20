// write the function isAnagram
var isAnagram = function (test, original) {
    return (
        test.toLowerCase().split('').sort().join('') ===
        original.toLowerCase().split('').sort().join('')
    );
};

console.log(isAnagram('foefet', 'toffee'));
console.log(isAnagram('Buckethead', 'DeathCubeK'));
console.log(isAnagram('Twoo', 'WooT'));

console.log(isAnagram('dumble', 'bumble'));
console.log(isAnagram('ound', 'round'));
console.log(isAnagram('apple', 'pale'));

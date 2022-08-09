function mouthSize(animal) {
    return /alligator/i.test(animal) ? 'small' : 'wide';
}

console.log(mouthSize('toucan'));
console.log(mouthSize('ant bear'));
console.log(mouthSize('alligator'));

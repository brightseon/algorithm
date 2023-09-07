function stringMerge(string1, string2, letter) {
    return string1.slice(0, string1.indexOf(letter)) + string2.slice(string2.indexOf(letter));
}

console.log(stringMerge('person', 'here', 'e'));
console.log(stringMerge('apowiejfoiajsf', 'iwahfeijouh', 'j'));
console.log(stringMerge('abcdefxxxyzz', 'abcxxxyyyxyzz', 'x'));
console.log(stringMerge('12345654321', '123456789', '6'));
console.log(stringMerge('JiOdIdA4', 'oopopopoodddasdfdfsd', 'd'));
console.log(stringMerge('incredible', 'people', 'e'));

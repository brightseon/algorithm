function isVeryEvenNumber(n) {
    const total = [...`${n}`].reduce((a, b) => a + +b, 0);

    if (`${total}`.length > 1) return isVeryEvenNumber(total);

    return total % 2 === 0;
}

console.log(isVeryEvenNumber(0));
console.log(isVeryEvenNumber(4));
console.log(isVeryEvenNumber(12));
console.log(isVeryEvenNumber(222));
console.log(isVeryEvenNumber(5));
console.log(isVeryEvenNumber(45));
console.log(isVeryEvenNumber(4554));
console.log(isVeryEvenNumber(1234));
console.log(isVeryEvenNumber(88));
console.log(isVeryEvenNumber(24));
console.log(isVeryEvenNumber(400000220));

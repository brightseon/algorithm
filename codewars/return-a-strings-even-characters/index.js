function evenChars(string) {
    if (string.length < 2 || string.length > 100) return 'invalid string';

    return string.split('').filter((s, i) => (i + 1) % 2 === 0);
}

console.log(evenChars('1234'));
console.log(evenChars(';;;--'));
console.log(evenChars('abcdefghijklm'));

console.log(
    evenChars(
        'aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva'
    )
);
console.log(evenChars('a'));
console.log(evenChars(''));

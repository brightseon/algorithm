function DNAStrand(dna) {
    const COMPLEMENTS = {
        A: 'T',
        T: 'A',
        C: 'G',
        G: 'C'
    };
    return dna
        .split('')
        .map((a) => COMPLEMENTS[a])
        .join('');
}

// -----------------------------------------------------------
// function DNAStrand(dna) {
//     return dna.replace(/./g, function(c) {
//       return DNAStrand.pairs[c]
//     })
//   }

//   DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C',
//   }

// let pairs = {A:'T',T:'A',C:'G',G:'C'};
// const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

console.log(DNAStrand('AAAA'));
console.log(DNAStrand('ATTGC'));
console.log(DNAStrand('GTAT'));

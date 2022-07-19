function DNAtoRNA(dna) {
    return dna.replace(/t/gi, 'U');
}

console.log(DNAtoRNA('TTTT'));
console.log(DNAtoRNA('GCAT'));
console.log(DNAtoRNA('GACCGCCGCC'));

function strong(n) {
    const total = `${n}`.split('').reduce((a, b) => {
        return (
            a +
            Array(+b)
                .fill(1)
                .reduce((c, d, i) => c * (d + i), 1)
        );
    }, 0);

    return total === n ? 'STRONG!!!!' : 'Not Strong !!';
}

console.log(strong(1));
console.log(strong(2));
console.log(strong(145));
console.log(strong(7));
console.log(strong(93));
console.log(strong(185));

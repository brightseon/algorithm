function evenOrOdd(str) {
    const { even, odd } = str.split('').reduce(
        (a, b) => {
            a[+b % 2 === 0 ? 'even' : 'odd'] += +b;

            return a;
        },
        { even: 0, odd: 0 }
    );

    if (even > odd) return 'Even is greater than Odd';
    if (odd > even) return 'Odd is greater than Even';

    return 'Even and Odd are the same';
}

console.log(evenOrOdd('12'));
console.log(evenOrOdd('123'));
console.log(evenOrOdd('112'));

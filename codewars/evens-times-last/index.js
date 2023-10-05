function evenLast(numbers) {
    return (
        numbers.reduce((a, b, i) => {
            if (i % 2 > 0) return a;

            return a + b;
        }, 0) * numbers[numbers.length - 1]
    );
}

console.log(evenLast([2, 3, 4, 5]));

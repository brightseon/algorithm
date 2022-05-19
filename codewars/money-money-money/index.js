function calculateYears(principal, interest, tax, desired) {
    if (principal >= desired) return 0;
    let year = 0,
        p = principal;

    while (p < desired) {
        p = p + (p * interest - p * interest * tax);
        ++year;
    }

    return year;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
console.log(calculateYears(1000, 0.05, 0.18, 1000));

function calculateAge(current, future) {
    const age = future - current;
    if (age === 0) return 'You were born this very year!';
    if (age < 0)
        return `You will be born in ${Math.abs(age)} ${Math.abs(age) === 1 ? 'year' : 'years'}.`;

    return `You are ${age} ${age === 1 ? 'year' : 'years'} old.`;
}

console.log(calculateAge(2012, 2016));
console.log(calculateAge(1989, 2016));
console.log(calculateAge(2000, 2090));
console.log(calculateAge(2000, 1990));
console.log(calculateAge(3400, 3400));
console.log(calculateAge(900, 2900));
console.log(calculateAge(2010, 1990));
console.log(calculateAge(2010, 1500));
console.log(calculateAge(2011, 2012));
console.log(calculateAge(2000, 1999));

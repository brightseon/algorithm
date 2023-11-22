function tidyNumber(n) {
    return (
        n ===
        +`${n}`
            .split('')
            .sort((a, b) => a - b)
            .join('')
    );
}

console.log(tidyNumber(12));
console.log(tidyNumber(102));
console.log(tidyNumber(9672));
console.log(tidyNumber(2789));
console.log(tidyNumber(2335));

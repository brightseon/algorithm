function pipeFix(numbers) {
    let result = [];
    for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
        result.push(i);
    }

    return result;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
console.log(pipeFix([1, 2, 3, 12]));
console.log(pipeFix([6, 9]));
console.log(pipeFix([-1, 4]));
console.log(pipeFix([1, 2, 3]));

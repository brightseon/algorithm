function removeSmallest(numbers) {
    if (numbers.length === 0) return numbers;
    const idx = numbers.indexOf(Math.min(...numbers));

    return numbers.filter((n, i) => i !== idx);
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));

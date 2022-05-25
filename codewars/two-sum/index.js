function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        const idx2 = numbers.indexOf(target - numbers[i], i + 1);
        if (idx2 === -1) continue;

        return [i, idx2];
    }
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));

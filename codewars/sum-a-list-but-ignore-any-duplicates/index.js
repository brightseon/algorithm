function sumNoDuplicates(numList) {
    return numList.reduce((a, b) => {
        if (numList.filter((n) => n === b).length > 1) return a;

        return a + b;
    }, 0);
}

console.log(sumNoDuplicates([1, 1, 2, 3]));
console.log(sumNoDuplicates([]));
console.log(sumNoDuplicates([1, 1, 2, 2, 3]));
console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]));
console.log(sumNoDuplicates([0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0]));
console.log(sumNoDuplicates([0, 1, 4, 4, 0, 4, 2, 5, 9, 0, 10, 9, 0, 1, 2]));
console.log(sumNoDuplicates([7, 2, 10, 9, 10, 2, 7, 3, 10, 8, 2, 5]));
console.log(sumNoDuplicates([7, 2, 0, 3, 5, 7, 8, 3, 2, 10, 9, 5]));
console.log(sumNoDuplicates([1, 9, 9, 5, 7, 7, 6, 1, 5, 6]));
console.log(sumNoDuplicates([10, 10, 1, 4, 10, 3, 9, 6, 10, 10, 9, 9, 10, 5, 6, 10, 4, 1]));
console.log(sumNoDuplicates([7, 10, 10, 9, 0, 2, 5, 10, 3, 8, 1, 4, 9, 9, 5, 8, 8, 8, 5, 3]));
console.log(sumNoDuplicates([1, 9, 2, 1, 5, 5, 1, 1, 5, 10, 5, 9, 5, 2, 1]));
console.log(sumNoDuplicates([8, 6, 3, 6, 7, 3, 4, 4, 2, 1, 4, 5, 8, 6]));
console.log(sumNoDuplicates([10, 9, 2, 8, 9, 10, 4, 6, 9, 5, 1, 1, 4, 3, 9, 7, 8, 5, 5]));
console.log(sumNoDuplicates([5, 5, 0, 0, 6, 3, 7, 2, 4, 2]));
console.log(sumNoDuplicates([0, 8, 5, 10, 1, 1, 6, 8]));
console.log(sumNoDuplicates([4, 2, 10, 9, 10, 5, 1, 7, 1, 9, 8, 7, 4, 2, 5, 8, 3, 10, 8]));
console.log(sumNoDuplicates([9, 8, 3, 1, 8, 1, 7]));
console.log(sumNoDuplicates([1, 4, 3, 8, 9, 4, 7, 5, 10, 10, 7, 6, 9, 3]));
console.log(sumNoDuplicates([2, 0, 4, 2, 2, 3, 6, 7, 3, 8, 10, 6, 8]));
console.log(sumNoDuplicates([7, 9, 5, 6, 1, 0, 5, 0, 4, 7, 1, 2, 8, 9, 6, 1]));
console.log(sumNoDuplicates([7, 1, 8, 8, 5, 5, 1, 4, 0, 1, 10, 1]));

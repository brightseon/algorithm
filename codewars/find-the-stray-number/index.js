function stray(numbers) {
    const sortingNum = [...numbers].sort((a, b) => a - b);
    return sortingNum[0] === sortingNum[1] ? sortingNum[sortingNum.length - 1] : sortingNum[0];
}

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));

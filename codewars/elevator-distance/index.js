function elevatorDistance(array) {
    return array.slice(1).reduce((a, b, i) => a + Math.abs(array[i] - b), 0);
}

console.log(elevatorDistance([5, 2, 8]));
console.log(elevatorDistance([1, 2, 3]));
console.log(elevatorDistance([7, 1, 7, 1]));

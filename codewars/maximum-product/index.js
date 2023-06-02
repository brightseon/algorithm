function adjacentElementsProduct(array) {
    return Math.max(...array.slice(0, array.length - 1).map((a, i) => a * array[i + 1]));
}

console.log(adjacentElementsProduct([5, 8]));
console.log(adjacentElementsProduct([1, 2, 3]));
console.log(adjacentElementsProduct([1, 5, 10, 9]));
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]));
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]));
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]));
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]));

console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]));
console.log(adjacentElementsProduct([1, 2, 3, 0]));

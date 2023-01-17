function min(arr, toReturn) {
    const min = Math.min(...arr);

    if (toReturn === 'value') return min;

    return arr.findIndex((a) => a === min);
}

console.log(min([1, 2, 3, 4, 5], 'value'));
console.log(min([1, 2, 3, 4, 5], 'index'));

Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
    value: function numberOfOccurrences(element) {
        return this.filter((a) => a === element).length;
    }
});

var arr = [0, 1, 2, 2, 3];
console.log(arr.slice().numberOfOccurrences(0));
console.log(arr.slice().numberOfOccurrences(4));
console.log(arr.slice().numberOfOccurrences(2));
console.log(arr.slice().numberOfOccurrences(3));

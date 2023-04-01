const head = (arr) => arr[0];

const tail = (arr) => arr.slice(1, arr.length);

const init = (arr) => arr.slice(0, arr.length - 1);

const last = (arr) => arr[arr.length - 1];

console.log(head([5, 1]));
console.log(tail([1]));
console.log(init([1, 5, 7, 9]));
console.log(last([7, 2]));

console.log(tail([23, 25, 4, 1, 6]));

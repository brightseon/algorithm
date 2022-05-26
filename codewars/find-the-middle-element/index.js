function gimme(triplet) {
    return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}

console.log(gimme([2.1, 3.2, 1.4]));
console.log(gimme([5.9, 10.4, 14.2]));
console.log(gimme([-2, -3, -1]));
console.log(gimme([-5, -10, -14]));
console.log(gimme([-2, -3.2, 1]));
console.log(gimme([-5.2, -10.6, 14]));

function move(position, roll) {
    return position + roll * 2;
}

console.log(move(0, 4));
console.log(move(3, 6));
console.log(move(2, 5));

function meeting(x) {
    const idx = x.indexOf('O');

    return idx === -1 ? 'None available!' : idx;
}

console.log(meeting(['X', 'O', 'X']));
console.log(meeting(['O', 'X', 'X', 'X', 'X']));
console.log(meeting(['X', 'X', 'X', 'X', 'X']));

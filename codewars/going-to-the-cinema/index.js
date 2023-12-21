function movie(card, ticket, perc) {
    let count = 1;
    let b = card + ticket * perc;
    let a = ticket * count;

    while (a <= Math.ceil(b)) {
        count += 1;
        a = ticket * count;
        b += ticket * Math.pow(perc, count);
    }

    return count;
}

console.log(movie(500, 15, 0.9));
console.log(movie(100, 10, 0.95));

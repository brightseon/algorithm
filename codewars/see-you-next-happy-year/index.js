function nextHappyYear(year) {
    while (true) {
        year += 1;

        if (new Set(`${year}`).size === `${year}`.length) return year;
    }
}

console.log(nextHappyYear(1001));
console.log(nextHappyYear(1123));
console.log(nextHappyYear(2001));
console.log(nextHappyYear(2334));
console.log(nextHappyYear(3331));
console.log(nextHappyYear(1987));
console.log(nextHappyYear(5555));
console.log(nextHappyYear(7712));
console.log(nextHappyYear(8088));
console.log(nextHappyYear(8999));
